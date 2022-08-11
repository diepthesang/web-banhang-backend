const { getUserByEmail, registerAccount, getUserByUsername } = require("../services/auth.services");
const JWT = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

module.exports = {

    registerAccount: async (req, res, next) => {
        console.log('////////');
        try {
            let { username, email, password, confirmPassword } = req.body;

            if (!username || !email || !password || !confirmPassword) {
                return res.status(200).json(
                    {
                        message: 'ban fai dien day du thong tin'
                    }
                )
            }

            let checkExistEmail = await getUserByEmail(email);
            let checkExistUsername = await getUserByUsername(username);


            if (checkExistUsername) {
                return res.status(200).json(
                    {
                        errCode: 1,
                        message: ' username is existed!'
                    }
                )
            }
            if (checkExistEmail) {
                return res.status(200).json(
                    {
                        errCode: 1,
                        message: ' email is existed!'
                    }
                )
            }

            if (!checkExistEmail && !checkExistUsername) {

                if (password === confirmPassword) {
                    await registerAccount(username, email, password);
                    res.status(200).json({
                        message: 'create account successfully'
                    })
                } else {
                    res.json({
                        errCode: 1,
                        message: 'password is not confirm'
                    })
                }
            }
        } catch (error) {
            res.status(500).json({
                errCode: 1,
                message: 'error resgister account'
            })
        }


    },
    loginAccount: async (req, res, next) => {
        let { username, password } = req.body;
        console.log(username);
        if (!username && !password) {
            return res.status(200).json({
                message: 'ban can fai dien day du thong tin'
            })
        }

        let checkExistUsername = await getUserByUsername(username)

        if (!checkExistUsername) {
            return res.status(200).json({
                message: 'tai khoan khong ton tai'
            })
        }
        if (checkExistUsername) {
            let token = encodeToken(checkExistUsername.id)
            let hashPassword = checkExistUsername.password
            bcrypt.compare(password, hashPassword, function (err, result) {

                try {
                    if (result) {
                        console.log(token);
                        res.setHeader('Authorization', 'Bearer ' + token)
                        return res.status(200).json('dang nhap thanh cong')
                    } else {
                        return res.json('mat khau sai')
                    }
                } catch (error) {
                    return res.json(err)
                }
            });

        }

    }
}


let encodeToken = (userId) => {
    return JWT.sign(
        {
            iss: 'diepthesang',
            sub: userId,

        },
        process.env.JWT_SECRETKEY,
        {
            expiresIn: 60 * 2
        }
    )
}