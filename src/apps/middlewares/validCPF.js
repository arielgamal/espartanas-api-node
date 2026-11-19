const { cpf: cpfvalidator } = require('cpf-cnpj-validator'); 

const validCPF = (req, res, next) => {
    const cpf = req.body.cpf;
    const cpfformatado = cpf.replace(/[^\d]+/g, '');
    try {
        const validaCPF = cpfvalidator.isValid(cpfformatado)
        if(!validaCPF) {
            return res.status(400).json({message: "Número de CPF inválido, verifique se foi digitado corretamente"})
        }
        return next()
    } catch (e) {
        console.log(e.message)
        return res.status(400).json({message: "Algo deu errado não sei o que é"})
    }
}

module.exports = validCPF
