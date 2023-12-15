const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 3002

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'magic_post'
})

app.use(cors())
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.json())

// app.put('/api/update', (req, res) => {
//     const sqlStatement = `

//     `
// })

//
// api của giao dịch viên
//

app.get('/api/get', (req, res) => {
    const sqlStatement = `
        SELECT t.TransactionID, t.SenderUserID, t.ReceiverUserID, t.SentDate, g.Description, g.Status, g.Type, t.Status
        FROM transactions t JOIN goods g on t.TransactionID = g.GoodID
    `
    db.query(sqlStatement, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.json(results)
        }
    })
})

app.post('/api/create', (req, res) => {
    console.log(req.body);
    const senderName = req.body.senderName
    const senderPhone = req.body.senderPhone
    const senderAddress = req.body.senderAddress

    const receiverName = req.body.receiverName
    const receiverPhone = req.body.receiverPhone
    const receiverAddress = req.body.receiverAddress

    const productType = req.body.productType
    const productStatus = req.body.productStatus
    const productDescription = req.body.productDescription

    db.query(`INSERT IGNORE INTO locations(LocationName, LocationType, Region) VALUES ('${senderAddress}', '', 'Miền Bắc')`, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            db.query(`INSERT IGNORE INTO users(UserName, Password, UserType, LocationID, phone_number) 
                SELECT '${senderName}', '', 'Khách hàng', LAST_INSERT_ID(), '${senderPhone}'`, (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    db.query(`INSERT IGNORE INTO locations(LocationName, LocationType, Region) VALUES ('${receiverAddress}', '', 'Miền Bắc')`, (err, results) => {
                        if (err) {
                            console.log(err);
                        } else {
                            db.query(`INSERT IGNORE INTO users(UserName, Password, UserType, LocationID, phone_number) 
                                    SELECT '${receiverName}', '', 'Khách hàng', LAST_INSERT_ID(), '${receiverPhone}'`, (err, results) => {
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
                                                })
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
})

//
// api của giám đốc
//

app.get('/api/getGD', (req, res) => {
    const sqlStatement = `
        SELECT t.UserName, t.Password, t.UserType, t.phone_number, g.LocationName
        FROM users t JOIN locations g on t.LocationID = g.LocationID
        WHERE t.UserType <> 'Khách hàng'
    `
    db.query(sqlStatement, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.json(results)
        }
    })
})

app.post('/api/createGD', (req, res) => {
    console.log(req.body);
    const username = req.body.username
    const password = req.body.password
    
    const phone = req.body.phone
    const locationName = req.body.locationName
    const userType = req.body.userType

    db.query(`INSERT IGNORE INTO locations(LocationName, LocationType, Region) VALUES ('${locationName}', '', '')`, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            db.query(`INSERT IGNORE INTO users(UserName, Password, UserType, LocationID, phone_number) 
                SELECT '${username}', '${password}', '${userType}', LAST_INSERT_ID(), '${phone}'`, (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Insert successfully!')
                }
            });
        }
    });
})

app.get('/api/getProductGD', (req, res) => {
    const sqlStatement = `
        SELECT f.GoodID, t.UserName, f.Type, f.Description, g.SentDate, g.Status
        FROM users t
        JOIN transactions g ON t.UserID = g.SenderUserID
        JOIN goods f ON f.GoodID = g.TransactionID
        WHERE t.UserType = 'Khách hàng'
    `
    db.query(sqlStatement, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.json(results)
        }
    })
})

//
// api của trưởng điểm giao dịch
//


app.get('/api/getTDGD', (req, res) => {
    const sqlStatement = `
        SELECT t.UserName, t.Password, t.UserType, t.phone_number, g.LocationName
        FROM users t JOIN locations g on t.LocationID = g.LocationID
        WHERE t.UserType <> 'Khách hàng' and t.UserType <> 'trưởng điểm giao dịch'
        and t.UserType <> 'trưởng điểm tập kết' and t.UserType <> 'tập kết viên' 
    `
    db.query(sqlStatement, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.json(results)
        }
    })
})

app.post('/api/createTDGD', (req, res) => {
    console.log(req.body);
    const username = req.body.username
    const password = req.body.password
    
    const phone = req.body.phone
    const locationName = req.body.locationName
    const userType = req.body.userType

    db.query(`INSERT IGNORE INTO locations(LocationName, LocationType, Region) VALUES ('${locationName}', '', '')`, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            db.query(`INSERT IGNORE INTO users(UserName, Password, UserType, LocationID, phone_number) 
                SELECT '${username}', '${password}', 'giao dịch viên', LAST_INSERT_ID(), '${phone}'`, (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Insert successfully!')
                }
            });
        }
    });
})

app.get('/api/getProductTDGD', (req, res) => {
    const sqlStatement = `
        SELECT f.GoodID, t.UserName, f.Type, f.Description, g.SentDate, g.Status
        FROM users t
        JOIN transactions g ON t.UserID = g.SenderUserID
        JOIN goods f ON f.GoodID = g.TransactionID
        WHERE t.UserType = 'Khách hàng' and t.UserType <> 'trưởng điểm giao dịch'
        and t.UserType <> 'trưởng điểm tập kết' and t.UserType <> 'tập kết viên' 
    `
    db.query(sqlStatement, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.json(results)
        }
    })
})


//
// api của trưởng điểm tập kết
//

app.get('/api/getTDTK', (req, res) => {
    const sqlStatement = `
        SELECT t.UserName, t.Password, t.UserType, t.phone_number, g.LocationName
        FROM users t JOIN locations g on t.LocationID = g.LocationID
        WHERE t.UserType <> 'Khách hàng' and t.UserType <> 'trưởng điểm giao dịch'
        and t.UserType <> 'trưởng điểm tập kết' and t.UserType <> 'giao dịch viên' 
    `
    db.query(sqlStatement, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.json(results)
        }
    })
})

app.post('/api/createTDTK', (req, res) => {
    console.log(req.body);
    const username = req.body.username
    const password = req.body.password
    
    const phone = req.body.phone
    const locationName = req.body.locationName
    const userType = req.body.userType

    db.query(`INSERT IGNORE INTO locations(LocationName, LocationType, Region) VALUES ('${locationName}', '', '')`, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            db.query(`INSERT IGNORE INTO users(UserName, Password, UserType, LocationID, phone_number) 
                SELECT '${username}', '${password}', 'tập kết viên', LAST_INSERT_ID(), '${phone}'`, (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('Insert successfully!')
                }
            });
        }
    });
})

app.get('/api/getProductTDTK', (req, res) => {
    const sqlStatement = `
        SELECT f.GoodID, t.UserName, f.Type, f.Description, g.SentDate, g.Status
        FROM users t
        JOIN transactions g ON t.UserID = g.SenderUserID
        JOIN goods f ON f.GoodID = g.TransactionID
        WHERE t.UserType = 'Khách hàng' and t.UserType <> 'trưởng điểm giao dịch'
        and t.UserType <> 'trưởng điểm tập kết' and t.UserType <> 'giao dịch viên' 
    `
    db.query(sqlStatement, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.json(results)
        }
    })
})


//
// api tập kết viên
//


app.get('/api/getTKV', (req, res) => {
    const sqlStatement = `
        SELECT t.TransactionID, t.SenderUserID, t.ReceiverUserID, t.SentDate, g.Description, g.Status, g.Type, t.Status
        FROM transactions t JOIN goods g on t.TransactionID = g.GoodID
    `
    db.query(sqlStatement, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            res.json(results)
        }
    })
})

app.post('/api/createTKV', (req, res) => {
    console.log(req.body);
    const senderName = req.body.senderName
    const senderPhone = req.body.senderPhone
    const senderAddress = req.body.senderAddress

    const receiverName = req.body.receiverName
    const receiverPhone = req.body.receiverPhone
    const receiverAddress = req.body.receiverAddress

    const productType = req.body.productType
    const productStatus = req.body.productStatus
    const productDescription = req.body.productDescription

    db.query(`INSERT IGNORE INTO locations(LocationName, LocationType, Region) VALUES ('${senderAddress}', '', 'Miền Bắc')`, (err, results) => {
        if (err) {
            console.log(err);
        } else {
            db.query(`INSERT IGNORE INTO users(UserName, Password, UserType, LocationID, phone_number) 
                SELECT '${senderName}', '', 'Khách hàng', LAST_INSERT_ID(), '${senderPhone}'`, (err, results) => {
                if (err) {
                    console.log(err);
                } else {
                    db.query(`INSERT IGNORE INTO locations(LocationName, LocationType, Region) VALUES ('${receiverAddress}', '', 'Miền Bắc')`, (err, results) => {
                        if (err) {
                            console.log(err);
                        } else {
                            db.query(`INSERT IGNORE INTO users(UserName, Password, UserType, LocationID, phone_number) 
                                    SELECT '${receiverName}', '', 'Khách hàng', LAST_INSERT_ID(), '${receiverPhone}'`, (err, results) => {
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
                                                })
                                        }
                                    });
                                }
                            });
                        }
                    });
                }
            });
        }
    });
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