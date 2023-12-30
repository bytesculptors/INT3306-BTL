const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')
const bycrypt = require('bcryptjs')

const app = express()
const port = 3001

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'delivery'
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

app.get('/api/get/transaction/:id', (req, res) => {
    const userID = req.params.id
    console.log(userID);
    db.query(`SELECT * FROM transactions WHERE SenderUserID = ${userID} OR ReceiverUserID = ${userID}`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(result);
            res.json(result)
        }
    })
})

app.get('/api/get/:senderAddress', (req, res) => {
    const senderAddress = req.params.senderAddress
    const isSuccess = req.query.isSuccess === 'true';
    // console.log(senderAddress.slice(1));
    let senderLocationID = 0
    db.query(`SELECT LocationID FROM locations WHERE LocationName = '${senderAddress.slice(1)}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(result);
            senderLocationID = result[0].LocationID
            let senderID = []
            const statusCondition = isSuccess ? "AND t.Status='Đang chờ chuyển đến người nhận'" : "AND t.Status='Chờ gửi'";
            db.query(`SELECT UserID FROM users WHERE LocationID = '${senderLocationID}'`, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    senderID = result.map(user => user.UserID);
                    const sqlStatement = `
                        SELECT t.TransactionID, t.SenderUserID, t.ReceiverUserID, t.SentDate, g.Description, g.Status, g.Type, t.Status
                        FROM transactions t JOIN goods g on t.TransactionID = g.GoodID
                        WHERE t.SenderUserID IN (${senderID.join(',')}) ${statusCondition}`
                    db.query(sqlStatement, (err, results) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.json(results)
                        }
                    })
                }
            })
        }
    })
})

app.post('/api/create', (req, res) => {
    console.log(req.body);
    const senderName = req.body.senderName
    const senderPhone = req.body.senderPhone
    const senderAddress = req.body.senderAddress
    let senderLocationID = null

    db.query(`SELECT LocationID FROM locations WHERE LocationName='${senderAddress}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            senderLocationID = result[0].LocationID;

            const receiverName = req.body.receiverName
            const receiverPhone = req.body.receiverPhone
            const receiverAddress = req.body.receiverAddress
            let receiverLocationID = null

            db.query(`SELECT LocationID FROM locations WHERE LocationName='${receiverAddress}'`, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    receiverLocationID = result[0].LocationID;

                    const productType = req.body.productType
                    const productStatus = req.body.productStatus
                    const productDescription = req.body.productDescription

                    db.query(`INSERT IGNORE INTO users(UserName, Password, UserType, LocationID, phone_number) 
                        SELECT '${senderName}', '', 'Khách hàng', ${senderLocationID}, '${senderPhone}'`, (err, results) => {
                        if (err) {
                            console.log(err);
                        } else {
                            db.query(`INSERT IGNORE INTO users(UserName, Password, UserType, LocationID, phone_number) 
                                    SELECT '${receiverName}', '', 'Khách hàng', ${receiverLocationID}, '${receiverPhone}'`, (err, results) => {
                                if (err) {
                                    console.log(err);
                                } else {
                                    db.query(`INSERT INTO transactions(SenderUserID, ReceiverUserID, SentDate, Status) 
                                                SELECT u1.UserID, u2.UserID, NOW(), 'Chờ gửi'
                                                FROM users u1, users u2
                                                WHERE u1.UserName = '${senderName}' AND u2.UserName = '${receiverName}'`, (err, results) => {
                                        if (err) {
                                            console.log(err);
                                        } else {
                                            db.query(`INSERT INTO goods(GoodID, Description, Status, Type) 
                                                            SELECT LAST_INSERT_ID(), '${productDescription}', '${productStatus}', '${productType}'`, (err, results) => {
                                                if (err) {
                                                    console.log(err);
                                                } else {
                                                    console.log('Insert successfully!')
                                                }
                                            });
                                        }
                                    });
                                }
                            })
                        }
                    });
                }
            });
        }
    });
});

app.put('/api/update/:id', (req, res) => {
    const transaction_id = req.params.id
    db.query(`UPDATE transactions SET Status = 'Đang ở tập kết' WHERE TransactionID = ${transaction_id}`, (err, res) => {
        if (err) {
            console.log(err);
        }
    })
})

app.get('/api/get/employee/gdv/:senderAddress', (req, res) => {
    const senderAddress = req.params.senderAddress
    // console.log(senderAddress);
    db.query(`SELECT LocationID FROM locations WHERE LocationName = '${senderAddress.slice(1)}'`, (err, result) => {
        let addressID = 0
        if (err) {
            console.log(err);
        } else {
            addressID = result[0].LocationID
            // console.log(addressID);
            db.query(`SELECT UserID, UserName, LocationID, phone_number FROM users WHERE UserType = 'giao-dich-vien' AND LocationID = ${addressID}`, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(result)
                }
            })
        }
    })
})

app.get('/api/get/employee/tkv/:senderAddress', (req, res) => {
    const senderAddress = req.params.senderAddress
    console.log(senderAddress);
    db.query(`SELECT LocationID FROM locations WHERE Region = '${senderAddress.slice(1)}'`, (err, result) => {
        let addressID = []
        if (err) {
            console.log(err);
        } else {
            addressID = result.map(item => item.LocationID)
            // console.log(addressID);
            db.query(`SELECT UserID, UserName, LocationID, phone_number FROM users 
                WHERE UserType = 'tap-ket-vien' 
                AND LocationID IN (${addressID.join(',')})`, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(result)
                }
            })
        }
    })
})

app.get('/api/get/tkv/:region', (req, res) => {
    const region = req.params.region
    let senderLocationID = []
    db.query(`SELECT LocationID FROM locations WHERE Region = '${region.slice(1)}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            senderLocationID = result.map(item => item.LocationID)
            const sqlStatement = `
                    SELECT t.TransactionID, t.SenderUserID, t.ReceiverUserID, t.SentDate, g.Description, g.Status, g.Type, t.Status
                        FROM transactions t JOIN goods g on t.TransactionID = g.GoodID
                        WHERE t.SenderUserID IN (
                            SELECT UserID
                            FROM users
                            WHERE LocationID IN (${senderLocationID.join(',')})
                        ) AND t.Status='Đang ở tập kết'`
            db.query(sqlStatement, (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(results)
                }
            })
        }
    })
})

app.put('/api/update/tkv/:id', (req, res) => {
    const transaction_id = req.params.id
    db.query(`UPDATE transactions SET Status = 'Đang chờ chuyển về điểm giao dịch' WHERE TransactionID = ${transaction_id}`, (err, res) => {
        if (err) {
            console.log(err);
        }
    })
})

app.get('/api/get/tkv/delivered/:region', (req, res) => {
    const region = req.params.region
    let receiverLocationID = []
    db.query(`SELECT LocationID FROM locations WHERE Region = '${region.slice(1)}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            receiverLocationID = result.map(item => item.LocationID)
            const sqlStatement = `
                    SELECT t.TransactionID, t.SenderUserID, t.ReceiverUserID, t.SentDate, g.Description, g.Status, g.Type, t.Status
                        FROM transactions t JOIN goods g on t.TransactionID = g.GoodID
                        WHERE t.ReceiverUserID IN (
                            SELECT UserID
                            FROM users
                            WHERE LocationID IN (${receiverLocationID.join(',')})
                        ) AND t.Status='Đang chờ chuyển về điểm giao dịch'`
            db.query(sqlStatement, (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    res.json(results)
                }
            })
        }
    })
})

app.put('/api/update/tkv/deliver/:id', (req, res) => {
    const transaction_id = req.params.id
    db.query(`UPDATE transactions SET Status = 'Đang chờ chuyển đến người nhận' WHERE TransactionID = ${transaction_id}`, (err, res) => {
        if (err) {
            console.log(err);
        }
    })
})

app.get('/api/get/gdv/delivered/:senderAddress', (req, res) => {
    const senderAddress = req.params.senderAddress
    // const isSuccess = req.query.isSuccess === 'true';
    // console.log(senderAddress.slice(1));
    let receiverLocationID = 0
    db.query(`SELECT LocationID FROM locations WHERE LocationName = '${senderAddress.slice(1)}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(result);
            receiverLocationID = result[0].LocationID
            let receiverID = []
            // const statusCondition = isSuccess ? "AND t.Status='Thành công'" : "AND t.Status='Chờ gửi'";
            db.query(`SELECT UserID FROM users WHERE LocationID = '${receiverLocationID}'`, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    receiverID = result.map(user => user.UserID);
                    const sqlStatement = `
                        SELECT t.TransactionID, t.SenderUserID, t.ReceiverUserID, t.SentDate, g.Description, g.Status, g.Type, t.Status
                        FROM transactions t JOIN goods g on t.TransactionID = g.GoodID
                        WHERE t.ReceiverUserID IN (${receiverID.join(',')}) AND t.Status='Đang chờ chuyển đến người nhận'`
                    db.query(sqlStatement, (err, results) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.json(results)
                        }
                    })
                }
            })
        }
    })
})

app.get('/api/get/gdv/success/:senderAddress', (req, res) => {
    const senderAddress = req.params.senderAddress
    // const isSuccess = req.query.isSuccess === 'true';
    // console.log(senderAddress.slice(1));
    let receiverLocationID = 0
    db.query(`SELECT LocationID FROM locations WHERE LocationName = '${senderAddress.slice(1)}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(result);
            receiverLocationID = result[0].LocationID
            let receiverID = []
            // const statusCondition = isSuccess ? "AND t.Status='Thành công'" : "AND t.Status='Chờ gửi'";
            db.query(`SELECT UserID FROM users WHERE LocationID = '${receiverLocationID}'`, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    receiverID = result.map(user => user.UserID);
                    const sqlStatement = `
                        SELECT t.TransactionID, t.SenderUserID, t.ReceiverUserID, t.SentDate, g.Description, g.Status, g.Type, t.Status
                        FROM transactions t JOIN goods g on t.TransactionID = g.GoodID
                        WHERE t.ReceiverUserID IN (${receiverID.join(',')}) AND t.Status='Hoàn thành'`
                    db.query(sqlStatement, (err, results) => {
                        if (err) {
                            console.log(err);
                        } else {
                            res.json(results)
                        }
                    })
                }
            })
        }
    })
})

app.post('/api/create/gdv', (req, res) => {
    const gdvName = req.body.gdvName
    const gdvPassword = req.body.gdvPassword
    const gdvPhone = req.body.gdvPhone
    const gdvAddress = req.body.gdvAddress

    let addressID = 0
    db.query(`SELECT LocationID FROM locations WHERE LocationName = '${gdvAddress}'`, async (err, result) => {
        if (err) {
            console.log(err);
        } else {
            addressID = result[0].LocationID
            console.log(addressID);
            let hashedPassword = await bycrypt.hash(gdvPassword, 8)
            console.log(hashedPassword);
            console.log(gdvAddress);
            db.query(`INSERT INTO users(UserName, Password, UserType, LocationID, phone_number)
                        SELECT '${gdvName}', '${hashedPassword}', 'giao-dich-vien', '${addressID}', '${gdvPhone}'`, (err, result) => {
                if (err) {
                    console.log(err);
                }
            })
        }
    })
})

app.post('/api/login/auth', (req, res) => {
    const { username, password, role, location } = req.body
    if (role === 'lanh-dao') {
        db.query(`SELECT * FROM users WHERE UserName = '${username}' AND UserType = '${role}'`, async (err, result) => {
            if (err) {
                console.log(err);
            } else {
                console.log(result.length);
                if (result.length === 1) {
                    const storedPassword = result[0].Password
                    const passwordMatch = storedPassword === password
                    if (passwordMatch) {
                        return res.json({ success: true })
                    } else {
                        return res.json({ success: false, error: 'Tài khoản không hợp lệ' });
                    }
                } else {
                    return res.json({ success: false, error: 'Tài khoản không hợp lệ' });
                }
            }
        })
    } else if (role === 'truong-diem-tap-ket' || role === 'tap-ket-vien') {
        let addressID = []
        db.query(`SELECT LocationID FROM locations WHERE Region = '${location}'`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                addressID = result.map(item => item.LocationID)
                db.query(`SELECT * FROM users WHERE 
                        UserName = '${username}' 
                        AND UserType = '${role}' 
                        AND LocationID IN (${addressID.join(',')})`, async (err, result) => {
                    if (result.length === 1) {
                        const storedHashedPassword = result[0].Password
                        const passwordMatch = await bycrypt.compare(password, storedHashedPassword);
                        if (passwordMatch) {
                            return res.json({ success: true })
                        } else {
                            return res.json({ success: false, error: 'Tài khoản không hợp lệ' });
                        }
                    }
                })
            }
        })
    }
    else {
        let addressID = 0
        db.query(`SELECT LocationID FROM locations WHERE LocationName = '${location}'`, (err, result) => {
            if (err) {
                console.log(err);
            } else {
                addressID = result[0].LocationID
                db.query(`SELECT * FROM users WHERE UserName = '${username}' AND UserType = '${role}' AND LocationID = ${addressID}`, async (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log(result.length);
                        if (result.length === 1) {
                            const storedHashedPassword = result[0].Password
                            const passwordMatch = await bycrypt.compare(password, storedHashedPassword);
                            if (passwordMatch) {
                                return res.json({ success: true })
                            } else {
                                return res.json({ success: false, error: 'Tài khoản không hợp lệ' });
                            }
                        } else {
                            return res.json({ success: false, error: 'Tài khoản không hợp lệ' });
                        }
                    }
                })
            }
        })
    }
})

app.get('/api/get/gdv/:address', (req, res) => {
    const address = req.body.address
    let addressID = 0
    db.query(`SELECT LocationID FROM locations WHERE LocationName = '${address}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            addressID = result[0].LocationID
            db.query(`SELECT UserID, UserName, UserType, phone_number FROM users
                WHERE UserType = 'giao-dich-vien' AND LocationID = '${addressID}'`, (err, result) => {
                if (err) {
                    console.log(err);
                }
            })
        }
    })
})

app.post('/api/create/lanhdao/leader', (req, res) => {
    const { name, password, phone, role, region } = req.body
    let addressID = 0
    db.query(`SELECT LocationID FROM locations WHERE LocationName = '${region}'`, async (err, result) => {
        if (err) {
            console.log(err);
        } else {
            addressID = result[0].LocationID
            let hashedPassword = await bycrypt.hash(password, 8)
            console.log(hashedPassword);
            db.query(`INSERT INTO users(UserName, Password, UserType, LocationID, phone_number)
                    SELECT '${name}', '${hashedPassword}', '${role}', '${addressID}', '${phone}'`)
        }
    })
})

app.post('/api/create/tkv', (req, res) => {
    const { tkvName, tkvPassword, tkvPhone, tkvAddress } = req.body
    console.log(tkvAddress);
    console.log(req.body);
    let addressID = 0
    db.query(`SELECT LocationID FROM locations WHERE Region = '${tkvAddress}'`, async (err, result) => {
        if (err) {
            console.log(err);
        } else {
            addressID = result[0].LocationID
            console.log(addressID);
            let hashedPassword = await bycrypt.hash(tkvPassword, 8)
            console.log(hashedPassword);
            console.log(tkvAddress);
            db.query(`INSERT INTO users(UserName, Password, UserType, LocationID, phone_number)
                        SELECT '${tkvName}', '${hashedPassword}', 'tap-ket-vien', '${addressID}', '${tkvPhone}'`, (err, result) => {
                if (err) {
                    console.log(err);
                }
            })
        }
    })
})

app.put('/api/update/deliverToCustomer/:id', (req, res) => {
    const transaction_id = req.params.id
    console.log(transaction_id);
    db.query(`UPDATE transactions SET Status = 'Hoàn thành' WHERE TransactionID = ${transaction_id.slice(1)}`, (err, res) => {
        if (err) {
            console.log(err);
        }
    })
})

app.get('/api/get/all/leader', (req, res) => {
    db.query(`SELECT UserID, UserName, UserType, phone_number FROM users 
        WHERE UserType = 'truong-diem-giao-dich' OR 
                UserType = 'truong-diem-tap-ket' OR
                UserType = 'giao-dich-vien' OR
                UserType = 'tap-ket-vien'`, (err, result) => {
                    if (err) {
                        console.log(err);
                    } else {
                        res.json(result)
                    }
                })
})


db.connect((err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('MySQL connected');
    }
})

app.listen(port, () => {
    console.log(`App listening on port ${port}`);
})