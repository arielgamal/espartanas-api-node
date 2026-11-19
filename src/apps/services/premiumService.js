const Users = require("../models/Users");

async function addPremiumPoints(asaasId, premiumPoints) {
    console.log(premiumPoints)
        // Avalia se o usuário é premium ou nao
        //se ele for premium irá somar (dias) dias + dias de premium anterior.
        //se ele não for, irá adicionar 30 dias de premiumacc e colocar premium: true
    const user = await Users.findOne({
        where: {
            asaas_id: asaasId //não pode ser mais o userId porque o usuário não está logado, tem que ser o AsaasId
        }
    })
    if (!user) throw new Error("Usuário não encontrado");
    
    const newPremiumTime = user.premium ? user.premium_time + premiumPoints : premiumPoints
    await Users.update({
        premium_time: newPremiumTime,
        premium: true
    }, { where: {
            asaas_id: asaasId
        }
    })

    return { message: user.premium ? `Usuário já possui premium: Adicionado ${ premiumPoints } dias` : `Usuário ganhou  premium de ${ premiumPoints } dias` }  // nao pode ser res, tem q jogar erro 
}

module.exports = { addPremiumPoints }