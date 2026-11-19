const Users = require("../models/Users")

const verifyPremium = async(req, res, next) => {
    const user = await Users.findOne({
        where: {
            id: req.userId,
        }
    })
    if(!user) {
        res.status(400).json({message: "Usuário não encontrado"})
    }
    if(!user.premium) {
        return res.status(401).json({message: 'Voce precisa de uma conta premium para acessar esse conteúdo'})
    }
    if(user.premium) {
        return next()
    }
}

module.exports = verifyPremium