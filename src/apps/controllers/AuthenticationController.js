const jwt = require('jsonwebtoken')
const User = require('../models/Users')
const {sendEmailChangePassword, bornToken, sendRegisterEmail} = require('../../utils/email')
const nodemailer = require('nodemailer');

class AuthenticationController {
    async authenticate(req, res) {
        const email = req.body.email
        const password = req.body.password

        const element = await User.findOne({
            where: { email: email }
        })
        if(!element) {
            return res.status(401).json("Usuário não encontrado")
        }
        if(!await element.checkPassword(password)) {
            return res.status(401).json({error: "Password does not match"})
        }
        const { id } = element
        const token = jwt.sign({ id }, process.env.HASH_BCRYPT, {
            expiresIn: "1800s"
        })
        const user = { ...element.toJSON() };
        delete user.password_hash;
        // if(user.valid_account === false) {
        //     console.log(user.verifycode)
        //     await sendRegisterEmail(email, user.verifycode)
        //     return res.status(200).json({user, token, message: "É preciso validar sua conta, reeviando email de confirmação"})
        // }
        return res.status(200).json({ user, token })
    }

    async forgotPassword(req, res) {
        const email = req.body.email
        const user = await User.findOne({ where: {email: email}})
        if(!user) return res.status(401).json({message: "Endereço de e-mail não encontrado(forgot password)"}) 
        
        const codigoConfirmação = bornToken()
        await sendEmailChangePassword(codigoConfirmação)
        return res.status(200).json({user: user, message: "Email enviado", email: email})
    }

    async hasEmail(req, res) {
        const email = req.body.email
        const user = await User.findOne({ where: {email: email}})
        if(!user) {
            return res.status(200).json({message: false})
        } 
        return res.status(200).json({email: true})
    }

    async resendToken(req, res) {
        const email = req.body.email
        const verifycode = bornToken()

        const user = await User.findOne({
            where: {
                email: email
            }
        })

        if(!user) {
            return res.status(404).json({message: "Não foi encontrado usuário com esse email"})
        }

        if(user.valid_account === true) {
            return res.status(200).json({message: "Essa conta já está valida"})
        }

        await User.update({
            verifycode: verifycode,
        }, { where: {email: email} })
        await sendRegisterEmail(email, verifycode)
        return res.send({message : "Novo Email de validação enviado com sucesso"})
    }
}

module.exports = new AuthenticationController()