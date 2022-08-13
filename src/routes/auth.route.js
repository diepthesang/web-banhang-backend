const express = require('express')
const passport = require('passport')
const passportConfig = require('../middelware/passport.middleware')
const { registerAccount, loginAccount, logoutAccount } = require('../controllers/auth.controller')
const route = express.Router()


route.post('/register', registerAccount)
route.post('/login', loginAccount)
// route.get('/logout', passport.authenticate('jwt', { session: false }), logoutAccount)


module.exports = route

