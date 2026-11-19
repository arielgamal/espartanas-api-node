const User = require('../models/Users')
const bcrypt = require('bcrypt');
const { Op, where } = require('sequelize');
const { sendRegisterEmail, bornToken } = require('../../utils/email');
const AsaasUtils = require('../../utils/AsaasUtils');

class UserController {
    async showUsers(req, res) {
        const allUsers = await User.findAll();
        res.send({users : allUsers})
    }

    async create(req, res) {
        const firstname = req.body.firstname
        const lastname = req.body.lastname
        const birthdate = req.body.birthdate
        const cpf = req.body.cpf
        const email = req.body.email
        const password = req.body.password
        const privacypolitics = req.body.privacypolitics
        const termsandservices = req.body.termsandservices
        const verifycode = bornToken()

        const verifyUser = await User.findOne({
            where: {
                [Op.or]: [
                    { email },
                    { cpf }
                ]
            }
        });

        if (verifyUser) return res.status(400).json({message: "Este usuário já existe com esse nome ou email ou telefone, crie outro usuário"})

        const newUser = {
            firstname,
            lastname,
            birthdate,
            cpf,
            email,
            password,
            verifycode: verifycode,
            privacypolitics,
            termsandservices
        }

        if (!newUser) { return res.status(400).json({message: "Campos inválidos"}) }
        await User.create(newUser)
        if (!User) {
            return res.status(400).json({message: "Falha ao criar o usuário!"})
        }
        await sendRegisterEmail(email, verifycode)
        return res.send({message : "Usuário criado com sucesso"})
    }

    async findUserById(req, res) {
        const user = await User.findOne({
            attributes: ['id', 'firstname', 'lastname', 'email', 'birthdate', 'cpf', 'phone', 'avatar', 'bio', 'gender', 'premium', 'valid_account', 'premium_time'],
            where: {
                id: req.userId
            }
        })
        if (!user) res.status(401).json({ message: "Usário não encontrado {0}" })
        return res.status(201).json({user: user})
    }

    async updatePassword(req, res) {
        const { password, new_password, confirm_password } = req.body

        const user = await User.findOne({
            where: {
                id: req.userId
            }
        })
        if (!user) return res.status(401).json({message: "Usuário não encontrado {1}"})

        if (!await user.checkPassword(password)) {
            return res.status(401).json({error: "Email ou password não estão corretos"})
        }
        if (!new_password || new_password.length < 4) {
            return res.status(401).json({error: "Defina uma senha melhor"})
        }
        if (new_password !== confirm_password) {
            return res.status(401).json({error: "As senhas tem q ser iguais"})
        }
        const encriptedNewPassword = await bcrypt.hash(new_password, 8)

        await User.update({
            password_hash: encriptedNewPassword
        }, {where: {id: user.id}})
        return res.status(201).json({user: user, message: "Password updated"})
    }

    async updateUser(req, res) {
        const { firstname, lastname, phone, birthdate, bio, gender, } = req.body

        try {
            const user = await User.findOne({
                where: {id: req.userId}
            })
    
            await User.update({
                firstname: firstname || user.firstname,
                lastname: lastname || user.lastname,
                birthdate: birthdate || user.birthdate,
                phone: phone || user.phone,
                bio: bio || user.bio,
                gender: gender || user.gender
            }, {where: { id: user.id }})
    
            await AsaasUtils.updateUserClient(user)
            // if(firstname || lastname) {
            //     console.log("entrou no if")
            //     // return res.status(201).json({user: user, message: "Usuário atualizado com troca de nome"})
            // }
            return res.status(201).json({user: user, message: "Usuário atualizado"})
        } catch (error) {
            res.status(400).json({erro: error.message, message: "Algo errado atualizacao usuário"})
        }
    }

    async updateAvatar(req, res) {
        const { filename } = req.file
        console.log(req.file)

        if(!filename) res.status(400).json({message: "Não possui imagem"})
        
        const user = User.findOne({
                where: {
                    id: req.userId
                }
            }
        )
        if(!user) res.status(400).json({message: "Usuário não encontrado"})

        await User.update({
            avatar: user.avatar || filename
        }, {where: {id: req.userId}})
        
        res.status(200).json({url: "uploads/" + filename})
    }

    async avatar(req, res) {
        // const nome = req.params.nome
        const user = await User.findOne({
            where: {id: req.userId}
        })

        if(!user) res.status(400).send({message: 'Usuário não encontrado'})
            console.log(user)

        // if(user.avatar !== nome) res.status(400).send({message: 'Imagem não encontrado'})

        return res.status(200).sendFile(`${user.avatar}`, {root: './uploads'})
    }

    async public_avatar(req, res) {
        const avatar = req.params.avatar

        const user = await User.findOne({
            where: {avatar: avatar}
        })

        return res.status(200).sendFile(`${user.avatar}`, {root: './uploads'})
    }
}

module.exports = new UserController();