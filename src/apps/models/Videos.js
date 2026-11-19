const Sequelize = require('sequelize')
const { Model } = require('sequelize')

class Videos extends Model {
    static init(sequelize) {
        super.init(
            {
                mes: Sequelize.STRING,
                ano: Sequelize.STRING,
                divisao_id: Sequelize.INTEGER,
                level_id: Sequelize.INTEGER,
                url: Sequelize.STRING,
            },
            {
                sequelize,
                modelName: 'Videos', // Nome do modelo
                tableName: 'videos' // Nome da tabela
            }
        );
        return this;
    }
    static associate(models) {
        this.belongsTo(models.TrainingDivision, {foreignKey: 'divisao_id'});
        this.belongsTo(models.TrainingLevel, {foreignKey: 'level_id'});
    }
}

module.exports = Videos;