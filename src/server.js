require('dotenv').config();
const { Op, Sequelize } = require('sequelize');
const express = require('express');
const routes = require('./routes')
const cors = require('cors');
const banco = require('./database/index')
const schedule = require('node-schedule');
const Users = require('./apps/models/Users');


// config inicial
const app = express();
app.use(cors())
app.use(express.json());
app.use(routes);

async function updatePremiumTime() {
    try {
        console.log("Executando rotina de checagem de expiração de contas premium as " + new Date().toLocaleString())
        const users = await Users.update({
            premium_time: Sequelize.literal('premium_time - 1')
        }, {
            where: {
                premium_time: {
                    [Op.gt]: 0
                }
            }
        })
        console.log('CRON REGRESSIVA PREMIUM: ' + users + ' usuário(s) alterado(s)')
    } catch (error) {
        console.log({erro: "Erro na rotina cron regressiva premium: " + error.message})   
    }
}

async function updateToFree() {
    const usuarios = await Users.findAll({
        where: {
            premium_time: 0
        }
    })

    //Outra maneira de fazer com sequelize(nao curti)
    for (const usuario of usuarios) {
        usuario.premium = false;
        usuario.premium_time = null
        await usuario.save();
    }
}

// schedule.scheduleJob('59 22 * * *', updateToFree); // 24 hrs
// schedule.scheduleJob('59 23 * * *', updatePremiumTime); // 24 hrs
// schedule.scheduleJob('* * * * *', updateToFree); // 1min
// schedule.scheduleJob('* * * * *', updatePremiumTime); //1 min
schedule.scheduleJob('*/5 * * * *', updateToFree) // 5 min
schedule.scheduleJob('*/5 * * * *', updatePremiumTime) // 5 min
const PORTA = process.env.PORT
app.listen(PORTA, console.log('App rodando na PORTA ' + PORTA + ' com conexão com banco '))