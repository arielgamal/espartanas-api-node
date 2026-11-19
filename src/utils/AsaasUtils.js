require('dotenv').config();
class Asaas {
    async createNewClient(user) {
        const url = 'https://sandbox.asaas.com/api/v3/customers';

        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                access_token: process.env.ASSAS_ACESS_TOKEN,
            },
            body: JSON.stringify({name: `${user.firstname} ${user.lastname}`, cpfCnpj: user.cpf, email: user.email})
        };

        const response = await fetch(url, options);
        const json = await response.json(); 
        return json      
    }

    async updateUserClient(user) {
        const url = `https://sandbox.asaas.com/api/v3/customers/${user.asaas_id}`
        // console.log(user.asaas_id)
        // console.log(user.firstname)
        // console.log(user.lastname)
        const options = {
            method: 'PUT',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                access_token: process.env.ASSAS_ACESS_TOKEN
            },
            body: JSON.stringify({name: `${user.firstname} ${user.lastname}`})
        };

        const response = await fetch(url, options);
        const json = await response.json();
        return json      
    }

    async findClientById(user) {
        const url = `https://sandbox.asaas.com/api/v3/customers/${user.asaas_id}`

        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                access_token: process.env.ASSAS_ACESS_TOKEN
            }
        };

        const response = await fetch(url, options);
        const json = await response.json();
        return json      
    }

    async premiumCreditCard(userId, data) {
        let dataAtual = new Date();
        dataAtual.setDate(dataAtual.getDate() + 1);
        let dia = dataAtual.getDate();
        let mes = dataAtual.getMonth() + 1;
        let ano = dataAtual.getFullYear();
        let dataValidade = ano + '-' + (mes < 10 ? '0' + mes : mes) + '-' + (dia < 10 ? '0' + dia : dia);

        const url = 'https://sandbox.asaas.com/api/v3/payments/';
        const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            access_token: process.env.ASSAS_ACESS_TOKEN
        },
        body: JSON.stringify({
            billingType: 'CREDIT_CARD',
            description: `${data.points} PREMIUM POINTS`,
            installmentCount: data.installmentCount, // enviar só se parcelar
            installmentValue: data.installmentValue, // enviar só se parcelar
            creditCard: {
            holderName: data.holderName,
            number: data.number,
            expiryMonth: data.expiryMonth,
            expiryYear: data.expiryYear,
            ccv: data.ccv
            },
            creditCardHolderInfo: {
            name: data.holderName,
            email: data.email,
            cpfCnpj: data.cpfCnpj,
            postalCode: data.postalCode,
            addressNumber: data.addressNumber,
            phone: data.phone
            },
            customer: userId,
            value: data.value,
            dueDate: dataValidade
        })
};
    const response = await fetch(url, options);
    const json = await response.json();
    return json
    }

    async premiumPixBoleto(userId, data) {
        let dataAtual = new Date();
        dataAtual.setDate(dataAtual.getDate() + 1);
        let dia = dataAtual.getDate();
        let mes = dataAtual.getMonth() + 1;
        let ano = dataAtual.getFullYear();
        let dataValidade = ano + '-' + (mes < 10 ? '0' + mes : mes) + '-' + (dia < 10 ? '0' + dia : dia);

        const url = 'https://sandbox.asaas.com/api/v3/payments';
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                access_token: process.env.ASSAS_ACESS_TOKEN
            },
            body: JSON.stringify({
                billingType: data.billing_type,
                customer: userId,
                value:  data.value,
                dueDate: dataValidade,
                description: `${data.points} PREMIUM POINTS`,
            })
        };

        const response = await fetch(url, options);
        const json = await response.json();
        return json
    }

    async premiumPix(userId, data) {
        let dataAtual = new Date();
        dataAtual.setDate(dataAtual.getDate() + 1);
        let dia = dataAtual.getDate();
        let mes = dataAtual.getMonth() + 1;
        let ano = dataAtual.getFullYear();
        let dataValidade = ano + '-' + (mes < 10 ? '0' + mes : mes) + '-' + (dia < 10 ? '0' + dia : dia);

        const url = 'https://sandbox.asaas.com/api/v3/payments';
        const options = {
            method: 'POST',
            headers: {
                accept: 'application/json',
                'content-type': 'application/json',
                access_token: process.env.ASSAS_ACESS_TOKEN
            },
            body: JSON.stringify({
                billingType: 'PIX',
                customer: userId,
                value:  data.value,
                dueDate: dataValidade,
                description: `${data.points} PREMIUM POINTS`,
            })
        };

        const response = await fetch(url, options);
        const json = await response.json();
        return json
    }

    async getPixQRCode (id) {
        const url = `https://sandbox.asaas.com/api/v3/payments/${id}/pixQrCode`;
        const options = {
            method: 'GET', 
            headers: {
                accept: 'application/json', 
                access_token: process.env.ASSAS_ACESS_TOKEN
            }
        };
        
        const response = await fetch(url, options);
        const json = await response.json();
        return json
    }

    async premiumBoleto (userId, data) {
        let dataAtual = new Date();
        dataAtual.setDate(dataAtual.getDate() + 1);
        let dia = dataAtual.getDate();
        let mes = dataAtual.getMonth() + 1;
        let ano = dataAtual.getFullYear();
        let dataValidade = ano + '-' + (mes < 10 ? '0' + mes : mes) + '-' + (dia < 10 ? '0' + dia : dia);

        const url = 'https://sandbox.asaas.com/api/v3/payments';
        const options = {
        method: 'POST',
        headers: {
            accept: 'application/json',
            'content-type': 'application/json',
            access_token: process.env.ASSAS_ACESS_TOKEN
        },
        body: JSON.stringify({
            billingType: 'BOLETO',
            customer: userId,
            value: data.value,
            dueDate: dataValidade,
            description: `${data.points} PREMIUM POINTS`
        })
        };

        const response = await fetch(url, options);
        const json = await response.json();
        return json
    }
}

module.exports = new Asaas()