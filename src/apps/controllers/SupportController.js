const User = require('../models/Users')
const Plans = require('../models/Plans')
const { sendSupportMessage } = require('../../utils/email')

class SupportController {
    async contactUs (req, res) {
        const name = req.body.name
        const message = req.body.message

        if(!name || !message ) {
            return res.status(400).json({message: "Voce precisa preencher os campos nome e email"})
        }
        const user = await User.findOne({
            where: {
                id: req.userId
            }
        })
        if (!user) {
            return res.status(400).json({message: "Usuário não encontrado"})
        }
        await sendSupportMessage(name, message, user.email, user.id)
        console.log(name, message, user.email, user.id)
        return res.status(200).json(`Email enviado com sucesso!`)
    }

    async plans (req, res) {
        const planos = await Plans.findAll()
        res.status(200).json({planos: planos})
    }
}

module.exports = new SupportController();