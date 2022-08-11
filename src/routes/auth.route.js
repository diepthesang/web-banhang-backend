const express = require('express')
const { registerAccount, loginAccount } = require('../controllers/auth.controller')
const route = express.Router()


route.post('/register', registerAccount)
route.post('/login', loginAccount)


module.exports = route

