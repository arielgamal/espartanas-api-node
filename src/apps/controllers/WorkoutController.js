const TrainingDivision = require("../models/TrainingDivision");
const TrainingLevel = require("../models/TrainingLevel");
const Workouts = require("../models/Workouts");

class WorkoutController {
    async inicianteWorkout(req, res) {
        const mes = req.params.mes;
        const divisao = req.params.divisao;
        try {
            const workout = await Workouts.findAll({
                include: [
                    {
                        model: TrainingDivision,
                        required: true,
                    },
                    {
                        model: TrainingLevel,
                        required: true
                    }
                ],
                where: {
                    level_id: 1,
                    mes: mes,
                    divisao_id: divisao
                }
            });
            res.status(201).json({workouts: workout})
        } catch(error) {
            console.log(error)
            res.status(401).json({error})
        }
    }

    async intermediarioWorkout(req, res) {
        const mes = req.params.mes;
        const divisao = req.params.divisao;
        try {
            const workout = await Workouts.findAll({
                include: [
                    {
                        model: TrainingDivision,
                        required: true,
                    },
                    {
                        model: TrainingLevel,
                        required: true
                    }
                ],
                where: {
                    mes: mes,
                    level_id: 2,
                    divisao_id: divisao
                }
            });
            res.status(201).json({workouts: workout})
        } catch(error) {
            console.log(error)
            res.status(401).json({error})
        }
    }

    async avancadoWorkout(req, res) {
        const mes = req.params.mes;
        const divisao = req.params.divisao;
        try {
            const workout = await Workouts.findAll({
                include: [
                    {
                        model: TrainingDivision,
                        required: true,
                    },
                    {
                        model: TrainingLevel,
                        required: true
                    }
                ],
                where: {
                    mes: mes,
                    level_id: 3,
                    divisao_id: divisao
                }
            });
            res.status(201).json({workouts: workout})
        } catch(error) {
            console.log(error)
            res.status(401).json({error})
        }
    }

    async allWorkouts(req, res) {
            //         const workout = await Workouts.findAll();
            // console.log("aqui")
            // res.status(201).json({workouts: workout})
        try {
            const workout = await Workouts.findAll({
                include: [
                    {
                        model: TrainingDivision,
                        required: true, // INNER JOIN
                    },
                    {
                        model: TrainingLevel,
                        required: true, // INNER JOIN
                    }
                ]
            });
            res.status(201).json({workouts: workout})
        } catch(error) {
            console.log(error)
            res.status(401).json({error})
        }
    }

    async addWorkout(req, res) {
        const { nome, mes, ano, level_id, divisao_id, explicacao, observacao, serie1, serie2, serie3, serie4, serie5, serie6 } = req.body;
        
        const newWorkout = {
            nome, 
            mes, 
            ano,
            level_id, 
            divisao_id,
            explicacao, 
            observacao, 
            serie1, 
            serie2, 
            serie3, 
            serie4, 
            serie5, 
            serie6
        }
        // await Workout.create(newWorkout)
        //     return res.status(201).json({message: 'Usuário criado com sucesso'})
        try {
            await Workouts.create(newWorkout)
            return res.status(201).json({message: 'Treino cadastrado'})
        } catch(error) {
            console.log(error)
            return res.status(401).json({message: error})
        }
    }
}

module.exports = new WorkoutController();