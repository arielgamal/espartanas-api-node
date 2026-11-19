const Sequelize = require('sequelize')
const { Model } = require("sequelize");

class Payments extends Model{
    static init(sequelize) {
        super.init({
            event: Sequelize.STRING,
            object: Sequelize.STRING,
            date_created: Sequelize.STRING,
            asaas_id: Sequelize.STRING,
            value: Sequelize.STRING,
            description: Sequelize.STRING,
            billing_type: Sequelize.STRING,
            confirmed_date: Sequelize.STRING,
            credit_card_number: Sequelize.STRING,
            credit_card_brand: Sequelize.STRING, //MASTERCARD, VISA...
            credit_card_token: Sequelize.STRING,
            status: Sequelize.STRING,
            premium_points: Sequelize.INTEGER,
            api_confirmed: Sequelize.BOOLEAN
        },
        {
            sequelize,
            modelName: 'Payments', // Nome do modelo
            tableName: 'payments' // Nome da tabela
        }
        );
        return this;
    }
    static associate(models) {
        this.belongsTo(models.Users, {foreignKey: 'asaas_id'})
    }
}

module.exports = Payments;