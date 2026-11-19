const Sequelize = require('sequelize');
const databaseConfig = require("../configs/db");
const Users = require('../apps/models/Users');
const TrainingDivision = require('../apps/models/TrainingDivision');
const InicianteTrainingDivision = require('../apps/models/InicianteTrainingDivision');
const TrainingLevel = require('../apps/models/TrainingLevel');
const Workouts = require('../apps/models/Workouts');
const Plans = require('../apps/models/Plans');
const Videos = require('../apps/models/Videos');
const Payments = require('../apps/models/Payments');

const models = [Users, InicianteTrainingDivision, TrainingDivision, TrainingLevel, Workouts, Plans, Videos, Payments];

class Database {
    constructor() {
        this.init()
    }
    init() {
        this.connection = new Sequelize(databaseConfig);
        models
        .map((model) => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models));
    }
}

module.exports = new Database();