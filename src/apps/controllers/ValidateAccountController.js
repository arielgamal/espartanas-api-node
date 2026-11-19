const User = require('../models/Users')
const asaas = require('../../utils/AsaasUtils')

class ValidateAccountController {
    async validateAccount(req, res) {
        const email = req.body.email
        const code = req.body.code

        try {
            //procura usuário com email digitado
            const user = await User.findOne({
                where: {
                    email: email
                }
            })
            if(!user) {
                return res.status(404).json({message: "Não foi encontrado usuário com esse email"})
            }
            if(user.valid_account) {
                console.log("valida")
                return res.status(200).json({message: "Conta já foi validada"})
            }
            if(user.verifycode !== code) {
                console.log("código comparado e deu errado")
                return res.status(401).json({error: "Código de verificação não é compatível"})
            }
            //ao validar o usuário também se cadastra no ASAAS.            
            const asaasUserId = await asaas.createNewClient(user)

            await User.update({
                valid_account: true,
                asaas_id: asaasUserId.id,
            }, { where: {
                email: email
            }})
            return res.status(200).json({message: "Conta validada com sucesso, agora voce pode adquirir os nossos planos!"})
        } catch(error) {
            res.status(400).json({erro: error.message, message: "Algo errado validação controller"})
        }
    }
}

module.exports = new ValidateAccountController()