const yup = require('yup')

const creditCardPaymentSchema = yup.object( {
    holderName: yup.string().min(3).max(80).required(),
    number: yup.string().min(16).max(16).required(),
    expiryMonth: yup.string().min(2).max(2).required(),
    expiryYear: yup.string().min(4).max(4).required(),
    ccv: yup.string().min(3).max(3).required(),
    email: yup.string().email().required(),
    cpfCnpj: yup.string().min(11).max(15).required(),
    postalCode: yup.string().min(9).max(9).required(),
    addressNumber: yup.string().required(),
    phone: yup.string().required(),
    value: yup.number().required(),
    points: yup.string().required(),
} )

module.exports = creditCardPaymentSchema