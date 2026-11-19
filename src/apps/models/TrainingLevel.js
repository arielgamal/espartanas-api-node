const Sequelize = require('sequelize')
const { Model } = require('sequelize')

class TrainingLevel extends Model {
    static init(sequelize) {
        super.init(
            {
                type: Sequelize.STRING,
            },
            {
                sequelize,
                modelName: 'TrainingLevel', // Nome do modelo
                tableName: 'training_level' // Nome da tabela
            }
        );
        return this;
    }
    static associate(models) {
        this.hasMany(models.Workouts, { foreignKey: 'level_id' });
        this.hasMany(models.Videos, { foreignKey: 'level_id' })

    }
}

module.exports = TrainingLevel;