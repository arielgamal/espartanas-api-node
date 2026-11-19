const Sequelize = require('sequelize')
const { Model } = require('sequelize')

class Workouts extends Model {
    static init(sequelize) {
        super.init(
            {
                nome: Sequelize.STRING,
                mes: Sequelize.STRING,
                ano: Sequelize.STRING,
                level_id: Sequelize.INTEGER,
                divisao_id: Sequelize.INTEGER,
                explicacao: Sequelize.TEXT,
                observacao: Sequelize.TEXT,
                serie1: Sequelize.TEXT,
                serie2: Sequelize.TEXT,
                serie3: Sequelize.TEXT,
                serie4: Sequelize.TEXT,
                serie5: Sequelize.TEXT,
                serie6: Sequelize.TEXT,
            },
            {
                sequelize,
                modelName: 'Workouts', // Nome do modelo
                tableName: 'workouts' // Nome da tabela
            }
        );
        return this;
    }
    static associate(models) {
        this.belongsTo(models.TrainingDivision, {foreignKey: 'divisao_id'})
        this.belongsTo(models.TrainingLevel, {foreignKey: 'level_id'})
    }
}

module.exports = Workouts;