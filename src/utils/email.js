const nodemailer = require('nodemailer');

const sendEmailChangePassword = async (senha) => {
    const transporter = nodemailer.createTransport({
        service: 'Hotmail',
        // port: 465,
        // secure: true,
        auth: {
            user: process.env.EMAIL_HOTMAIL_USER,
            pass: process.env.EMAIL_HOTMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_HOTMAIL_USER,
        to: process.env.EMAIL_RESET_TO,
        subject: 'Código de confirmação',
        text: `Your OTP (It is expired after 1 min)`,
        html: `<p>Olá esse é seu código de redefinição de senha para o Espartanas ${senha}</p>`
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            // console.log({message: error.message})
            return error.message
        } else {
            // console.log('Email enviado: ' + info.response);
            return info.response
        }
    });
}

const sendRegisterEmail = async (email, verifyCode) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_GMAIL_USER,
            pass: process.env.EMAIL_GMAIL_PASS,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL_GMAIL_USER,
        to: email,
        subject: 'Código de confirmação',
        text: `Your OTP (It is expired after 1 min)`,
        html: `<p>BEM VINDO AO ESPARTANAS! Agora voce pode iniciar seus treinos conosco.</p>
        <p>Começe validando sua conta.</p>
        <p>Seu código de confirmação é ${verifyCode}</p>
        `
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            // console.log({message: error.message})
            return error.message
        } else {
            // console.log('Email enviado: ' + info.response);
            return info.response
        }
    });
}

const sendSupportMessage = async(name, message, email, userId) => {
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 587,
        secure: false,
        auth: {
            user: process.env.EMAIL_GMAIL_USER,
            pass: process.env.EMAIL_GMAIL_PASS,
        },
    });
    const mailOptions = {
        from: process.env.EMAIL_GMAIL_USER,
        to: process.env.EMAIL_GMAIL_USER,
        subject: `Mensagem de ${email} para o suporte`,
        text: `??????`,
        html: `
        <p>Cliente: ${name}</p>
        <p>ID: ${userId}</p>
        <p>Email: ${email}</p>
        <p>${message}</p>
        `
    };
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            // console.log({message: error.message})
            return error.message
        } else {
            // console.log('Email enviado: ' + info.response);
            return info.response
        }
    });
}

const bornToken = () => {
    let numero = Math.floor(Math.random() * 9000) + 1000
    let CODE = numero.toString()
    return CODE
}

module.exports = {
    sendEmailChangePassword,
    sendRegisterEmail,
    sendSupportMessage,
    bornToken
}