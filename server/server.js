const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()
const port = 3001

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'database'
})

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.json())

// app.get('/api/get', (req, res) => {
//     const sqlStatement = `
//         SELECT t.TransactionID, t.SenderUserID, t.ReceiverUserID, t.SentDate, g.Description, g.Status, g.Type, t.Status
//         FROM transactions t JOIN goods g on t.TransactionID = g.GoodID
//     `
//     db.query(sqlStatement, (err, results) => {
//         if (err) {
//             console.log(err);
//         } else {
//             res.json(results)
//         }
//     })
// })

app.get('/api/get/:senderAddress', (req, res) => {
    const senderAddress = req.params.senderAddress
    // console.log(senderAddress.slice(1));
    let senderLocationID = 0
    db.query(`SELECT LocationID FROM locations WHERE LocationName = '${senderAddress.slice(1)}'`, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            // console.log(result);
            senderLocationID = result[0].LocationID
            let senderID = []
            db.query(`SELECT UserID FROM users WHERE LocationID = '${senderLocationID}'`, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    senderID = result.map(user => user.UserID);
                    const sqlStatement = `
                        SELECT t.TransactionID, t.SenderUserID, t.ReceiverUserID, t.SentDate, g.Description, g.Status, g.Type, t.Status
                        FROM transactions t JOIN goods g on t.TransactionID = g.GoodID
                        WHERE t.SenderUserID IN (${senderID.join(',')})`
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