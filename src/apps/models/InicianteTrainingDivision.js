const Sequelize = require('sequelize')
const { Model } = require('sequelize')

class InicianteTrainingDivision extends Model {
    static init(sequelize) {
        super.init(
            {
                codigo: Sequelize.STRING,
                divisao: Sequelize.STRING,
                descricao: Sequelize.STRING,
            },
            {
                sequelize,
                modelName: 'InicianteTrainingDivision', // Nome do modelo
                tableName: 'iniciante_training_division' // Nome da tabela
            }
        );
        return this;
    }
    static associate(models) {
        this.hasMany(models.Workouts, { foreignKey: 'divisao_id' });
        this.hasMany(models.Videos, {foreignKey: 'level_id'})
    }
}

module.exports = InicianteTrainingDivision;