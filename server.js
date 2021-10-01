const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const connection = require('mysql');
// 강제로 노드 모듈 고치기 : npm audit fix --force

app.get('/api/customers', (req, res) => {
    res.send([
        {
        id: 1,
        image: "https://placeimg.com/64/64/1",
        name: "한서희",
        birthday: "950401",
        gender: "여자",
        job: "취준생"
        },
        {
        id: 2,
        image: "https://placeimg.com/64/64/2",
        name: "어피치",
        birthday: "210928",
        gender: "여자",
        job: "복숭아"
        },
        {
        id: 3,
        image: "https://placeimg.com/64/64/3",
        name: "죠르디",
        birthday: "210929",
        gender: "여자",
        job: "공룡"
        }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));