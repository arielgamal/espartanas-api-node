const User = require("../models/Users");
const asaas = require('../../utils/AsaasUtils');
const Payments = require("../models/Payments");
const { addPremiumPoints } = require("../services/premiumService");

class PaymentController {
    async paymentCredit (req, res) {
        const data = req.body
        console.log(data)

        try {
            const user = await User.findOne({
                where: {
                    id: req.userId
                }
            })
    
            if(!user) return res.status(400).send({message: "Usuário não encontrado"})
            if(!user.asaas_id) return res.status(418).send({message: "Usuário sem cadastro válido na plataforma de pagamento - erro crítico, verifique se a conta está validada"})
                
                const payment = await asaas.premiumCreditCard(user.asaas_id, data)
                const user_payment = {
                    event: payment.event,
                    object: payment.object,
                    id: payment.id,
                    date_created: payment.dateCreated,
                    asaas_id: payment.customer,
                    value: payment.value,
                    description: payment.description,
                    billing_type: payment.billingType,
                    confirmed_date: payment.confirmedDate,
                    credit_card_number: payment.creditCard.creditCardNumber,
                    credit_card_brand: payment.creditCard.creditCardBrand,
                    credit_card_token: payment.creditCard.creditCardToken,
                    status: payment.status,
                    premium_points: data.points
                }
                const pontos = data.points
                await Payments.create(user_payment)
                if (payment.status === "CONFIRMED") {
                    return res.status(200).send({message: `${ pontos } premium points CONFIRMED`, dados: payment})    
                }
                return res.status(200).send({message: `${ pontos } premium points processando. Aguarde`, dados: payment})
        } catch (error) {
            res.status(400).json({erro: error.message, message: "Algo errado no pagamento com cartão de crédito"})
        }
    }

    async paymentPIX (req, res) {
        const data = req.body
        console.log(data)

        try {
            const user = await User.findOne({
                where: {
                    id: req.userId
                }
            })
    
            if(!user) return res.status(400).send({message: "Usuário não encontrado"})
            if(!user.asaas_id) return res.status(418).send({message: "Usuário sem cadastro válido na plataforma de pagamento - erro crítico, verifique se a conta está validada"})

                const payment = await asaas.premiumPix(user.asaas_id, data)
                const QRCODE = await asaas.getPixQRCode(payment.id)
                const user_payment = {
                    event: payment.event,
                    object: payment.object,
                    id: payment.id,
                    date_created: payment.dateCreated,
                    asaas_id: payment.customer,
                    value: payment.value,
                    description: payment.description,
                    billing_type: payment.billingType,
                    status: payment.status,
                    premium_points: data.points
                }
                const pontos = data.points
                await Payments.create(user_payment)
                return res.status(200).send({ message: `${ pontos } premium points processando. Aguarde`, dados: payment, pix: QRCODE })
        } catch (error) {
            res.status(400).json({erro: error.message, message: "Algo errado no pagamento com PIX"})
        }
    }

    async paymentBoleto (req, res) {
        const data = req.body
        console.log(data)

        try {
            const user = await User.findOne({
                where: {
                    id: req.userId
                }
            })
    
            if(!user) return res.status(400).send({message: "Usuário não encontrado"})
            if(!user.asaas_id) return res.status(418).send({message: "Usuário sem cadastro válido na plataforma de pagamento - erro crítico, verifique se a conta está validada"})

                const payment = await asaas.premiumBoleto(user.asaas_id, data)
                const user_payment = {
                    event: payment.event,
                    object: payment.object,
                    id: payment.id,
                    date_created: payment.dateCreated,
                    asaas_id: payment.customer,
                    value: payment.value,
                    description: payment.description,
                    billing_type: payment.billingType,
                    status: payment.status,
                    premium_points: data.points
                }
                const pontos = data.points
                await Payments.create(user_payment)
                return res.status(200).send({ message: `${ pontos } premium points processando. Aguarde`, dados: payment })
        } catch (error) {
            res.status(400).json({erro: error.message, message: "Algo errado no pagamento via BOLETO"})
        }
    }

    async payment (req, res) {
        const data = req.body
        console.log(data)

        try {
            const user = await User.findOne({
                where: {
                    id: req.userId
                }
            })
    
            if(!user) return res.status(400).send({message: "Usuário não encontrado"})
            if(!user.asaas_id) return res.status(418).send({message: "Usuário sem cadastro válido na plataforma de pagamento - erro crítico, verifique se a conta está valida"})

            const payment = await asaas.premiumPixBoleto(user.asaas_id, data)
            const user_payment = {
                event: payment.event,
                object: payment.object,
                id: payment.id,
                date_created: payment.dateCreated,
                asaas_id: payment.customer,
                value: payment.value,
                description: payment.description,
                billing_type: payment.billingType,
                status: payment.status,
                premium_points: data.points
            }
            const pontos = data.points
            await Payments.create(user_payment)
            
            if (data.billing_type === "PIX") {
                const QRCODE = await asaas.getPixQRCode(payment.id)
                return res.status(200).send({ message: `PIX: ${ pontos } pontos, realize o pagamento`, dados: payment, pix: QRCODE })
            }
            return res.status(200).send({ message: `BOLETO: ${ pontos } pontos, realize o pagamento`, dados: payment })

        } catch (error) {
            res.status(400).json({erro: error.message, message: "Algo errado no pagamento"})
        }
    }

    async paymentWebhook (req, res) {
        const body = req.body;
        const payment = await Payments.findOne({
            where: {
                asaas_id: body.payment.customer,
                id: body.payment.id,
                date_created: body.payment.dateCreated,
                api_confirmed: false
            }
        })

        if(!payment) return res.status(404).send({ message: "Pedido de compra não encontrado" })
        if ( body.event === "PAYMENT_CREATED" ) {
            return res.status(200).send({ message: "PAYMENT CREATED (waiting confirmation...)" })
        } else if ( body.event === "PAYMENT_AUTHORIZED" ) {
            console.log("Payment autorizado")
        } else if ( body.event === "PAYMENT_CONFIRMED" ) { // Confirmed geralmente cartão de crédito
            await Payments.update({
                status: body.payment.status,
                api_confirmed: true
            }, {
                where: {
                    asaas_id: body.payment.customer,
                    id: body.payment.id,
                    date_created: body.payment.dateCreated,
                    api_confirmed: false
                }
            })

            try {
                const result = await addPremiumPoints(body.payment.customer, payment.premium_points);
                return res.status(200).send({ message: "PAYMENT CONFIRMED", ...result });
            } catch (error) {
                return res.status(400).send({ message: error.message });
            }
        } else if ( body.event === "PAYMENT_RECEIVED" ) { // Received geralmente é pix ou boleto
            await Payments.update({
                status: body.payment.status,
                api_confirmed: true
            }, {
                where: {
                    asaas_id: body.payment.customer,
                    id: body.payment.id,
                    date_created: body.payment.dateCreated,
                    api_confirmed: false
                }
            })

            try {
                const result = await addPremiumPoints(body.payment.customer, payment.premium_points);
                return res.status(200).send({ message: "PAYMENT RECEIVED", ...result });
            } catch (error) {
                return res.status(400).send({ message: error.message });
            }
        }
    }
}

module.exports = new PaymentController();