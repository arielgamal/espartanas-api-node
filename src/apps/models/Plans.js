const Sequelize = require('sequelize')
const { Model } = require('sequelize')

class Plans extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                big_price: Sequelize.STRING,
                little_price: Sequelize.STRING,
                text_discount: Sequelize.STRING,
                text_installments: Sequelize.STRING,
                description: Sequelize.STRING,
                big_square_color: Sequelize.STRING,
                little_square_color: Sequelize.STRING
            },
            {
                sequelize,
                modelName: 'Plans', // Nome do modelo
                tableName: 'plans' // Nome da tabela
            }
        );
        return this;
    }
}

module.exports = Plans;