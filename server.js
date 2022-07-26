const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT;
console.log(PORT);


app.get('/', (req, res, next) => {
    res.json('thu nghiem ')
})


app.listen(PORT, () => {
    console.log('sever is running ', PORT);
})







