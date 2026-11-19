const User = require("../models/Users")

class PremiumController {
    async freeTrial (req, res) {
        //free trial apenas para quem tiver conta free. (disponibilizar na plataforma sazonalmente.)
        //VAI SOBRESCREVER todos os dias no banco e substituir pro valor que for colocado na variavel days
        //Não usar pra quem já tem dias no banco, só pra freeacc
        const days = req.params.days
        const user = await User.findOne({
            where: {
                id: req.userId
            }
        })
        if(!user) return res.status(400).send({message: "Usuário não encontrado"})
        console.log(user.premium)
        console.log(user.already_free_trial)
        if (user.premium) {
            return res.status(400).send({message: "Este usuário já possui uma conta premium"})
        }

        if (user.already_free_trial) {
            return res.status(400).send({message: "Este usuário já ganhou um free trial"})
        }
        
        await User.update({
            premium: true,
            already_free_trial: true,
            premium_time: days
        }, {
            where: {
                id: req.userId,
            }
        })
        return res.status(200).send({usuario: user.firstname, message: "Usuário " + user.firstname +" ganhou premium de " + days + " dia(s)"})
    }

    async premium30days (req, res) {
        // Aqui vai avaliar se o usuário é premium ou nao
        //se ele for premium irá somar (dias) dias + dias de premium anterior.
        //se ele não for, irá adicionar 30 dias de premiumacc e colocar premium: true
        const user = await User.findOne({
            where: {
                id: req.userId
            }
        })
        if(!user) return res.status(400).send({message: "Usuário não encontrado"})
        
        const newPremiumTime = user.premium_time + 30
        if(user.premium) {
            await User.update({
                premium_time: newPremiumTime
            }, { where: {
                    id: req.userId
                }
            })
            res.status(200).send({message: "Usuário já possui premium: Adicionado 30 dias"})
        } else {
            await User.update({
                premium_time: 30,
                premium: true
            }, {
                where: {
                    id: req.userId
                }
            })
            res.status(200).send({message: "Usuário ganhou premium de 30 dias"})
        }
    }

    async premiumStatus(req, res) {
        const user = await User.findOne({
            attributes: ['premium', 'premium_time'],
            where: {
                id: req.userId
            }
        })
        if(!user) res.status(401).json({ message: "Usário não encontrado"})

        if (user.premium_time <= 7) {
            return res.status(201).json({user: user, message: "Sua premium time está chegando no fim, renove agora ou seja mirrada"})
        }
        return res.status(201).json({user: user, message: "Espartanas, a melhor plataforma de treinos para mulheres"})
    }
}


module.exports = new PremiumController()