const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const data = fs.readFileSync('./database.json');
const conf = JSON.parse(data);
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: conf.host,
    user: conf.user,
    password: conf.password,
    port: conf.port,
    database: conf.database
});
// 이거!!
connection.connect();

// const connection = require('mysql');
// 강제로 노드 모듈 고치기 : npm audit fix --force

const multer = require('multer');
const upload = multer({dest: './upload'})

app.get('/api/customers', (req, res) => {
    connection.query(
        'SELECT * FROM CUSTOMER', //이부분
        (err, rows, fields) => {
            // console.log('test: '+ rows);
            res.send(rows);
        }
    );
});

app.use('./image', express.static('./upload'));

app.post('./api/customers', upload.single('image'), (req, res) => {
    let sql = 'INSERT INTO CUSTOMER VALUES (null, ?, ?, ?, ?, ?)';
    let image = '/image/' + req.file.filename;
    let name = req.body.name;
    let birthday = req.body.birthday;
    let gender = req.body.gender;
    let job = req.body.job;
    let params = [image, name, birthday, gender, job];
    connection.query(sql, params,
        (err, row, fields) => {
            res.send(rows);
        }
    );
});

app.listen(port, () => console.log(`Listening on port ${port}`));