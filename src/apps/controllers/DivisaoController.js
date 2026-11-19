const TrainingDivision = require("../models/TrainingDivision");
const InicianteTrainingDivision = require("../models/InicianteTrainingDivision");

class DivisaoController {
    async listAll(req, res) {
        const divisoes = await TrainingDivision.findAll()
        res.status(201).send({divisoes})
    }

    async inicianteList(req, res) {
        const divisoes = await InicianteTrainingDivision.findAll()
        res.status(201).send({divisoes})
    }
}

module.exports = new DivisaoController();