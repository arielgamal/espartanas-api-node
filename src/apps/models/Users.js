const Sequelize = require('sequelize')
const { Model } = require('sequelize')
const bcrypt = require('bcrypt');

class Users extends Model {
    static init(sequelize) {
        super.init(
            {
                firstname: Sequelize.STRING,
                lastname: Sequelize.STRING,
                birthdate: Sequelize.STRING,
                email: Sequelize.STRING,
                cpf: Sequelize.STRING,
                phone: Sequelize.STRING,
                avatar: Sequelize.STRING,
                bio: Sequelize.STRING,
                verifycode: Sequelize.STRING,
                gender: Sequelize.STRING,
                password_hash: Sequelize.STRING,
                password: Sequelize.VIRTUAL,
                privacypolitics: Sequelize.BOOLEAN,
                termsandservices: Sequelize.BOOLEAN,
                valid_account: Sequelize.BOOLEAN,
                already_free_trial: Sequelize.BOOLEAN,
                premium: Sequelize.BOOLEAN,
                premium_time: Sequelize.INTEGER, 
                asaas_id: Sequelize.STRING,
                created_at: Sequelize.DATE,
                updated_at: Sequelize.DATE
            },
            {
                sequelize,
                timestamps: false,
                modelName: 'Users',
                tableName: 'users'
            }
        );
        this.addHook("beforeSave", async (user) => {
            if (user.password) {
                user.password_hash = await bcrypt.hash(user.password, 8)
            }
        })
        return this;
    }

    checkPassword(password) {
        return bcrypt.compare(password, this.password_hash)
    }

    static associate(models) {
        this.hasMany(models.Payments, {foreignKey: 'asaas_id'})
    }
}

module.exports = Users;