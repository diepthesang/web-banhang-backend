const db = require("../db/models");
const bcrypt = require('bcrypt')

module.exports = {
    getUserByEmail: async (email) => {
        let user;
        try {
            user = await db.User.findOne(
                {
                    where: {
                        email: email
                    }
                }
            )
            return user;
        } catch (error) {
            return { message: 'err services' }
        }
    },
    getUserByUsername: async (username) => {
        let user;
        try {
            user = await db.User.findOne(
                {
                    where: {
                        username: username
                    }
                }
            )
            return user;
        } catch (error) {
            return { message: 'err services' }
        }
    },
    registerAccount: async (username, email, password) => {
        try {
            bcrypt.hash(password, 10).then(function (hashPassword) {
                // Store hash in your password DB.
                db.User.create({
                    username: username,
                    email: email,
                    password: hashPassword,
                    confirmPassword: hashPassword,
                    role: process.env.ROLE_USER,
                    active: true
                });
            });
        } catch (error) {
            return {
                message: 'error service'
            }
        }
    },
   
}   