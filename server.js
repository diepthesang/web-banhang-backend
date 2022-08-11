const express = require('express');
const app = express();
require('dotenv').config()
const PORT = process.env.PORT;
var morgan = require('morgan')
var cors = require('cors')
app.use(cors())
app.options('*', cors())
const userRoute = require('./src/routes/user.route')
const authRoute = require('./src/routes/auth.route')
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


app.use(morgan('tiny'))
app.use('/', userRoute)
app.use('/auth', authRoute)


app.listen(PORT, () => {
    console.log('sever is running ', PORT);
})







