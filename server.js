const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT;
console.log(PORT);
var cors = require('cors')
app.use(cors())
app.options('*', cors())
const userRoute = require('./src/routes/user.route')

app.use('/', userRoute)


app.listen(PORT, () => {
    console.log('sever is running ', PORT);
})







