const TrainingDivision = require('../models/TrainingDivision');
const TrainingLevel = require('../models/TrainingLevel');
const Videos = require('../models/Videos');

class VideoController {
    async allVideos(req, res) {
        try {
            const videos = await Videos.findAll()

            res.status(200).send({videos: videos})
        } catch (erro) {
            res.status(404).send({erro: erro.message})
        }

    }

    async inicianteVideo(req, res) {
        const mes = req.params.mes
        const divisao = req.params.divisao

        const videoIniciante = await Videos.findAll({
            where: {
                mes: mes,
                level_id: 1,
            }
        })
        res.status(200).send({iniciante: videoIniciante})
    }

    async intermediarioVideo(req, res) {
        const mes = req.params.mes

        const videoIniciante = await Videos.findAll({
            where: {
                mes: mes,
                level_id: 2,
            }
        })
        res.status(200).send({iniciante: videoIniciante})
    }

    async avancadoVideo(req, res) {
        const mes = req.params.mes
        const divisao = req.params.divisao

        const videoIniciante = await Videos.findAll({
            where: {
                mes: mes,
                level_id: 3,
            }
        })
        res.status(200).send({iniciante: videoIniciante})
    }

    async addVideo (req, res) {
        const { mes, ano, level_id, divisao_id, url } = req.body;

        const newVideo = {
            mes,
            ano, 
            level_id, 
            divisao_id, 
            url
        }

        try {
            await Videos.create(newVideo);
            return res.status(201).json({message: 'Video cadastrado'})
        } catch(error) {
            console.log(error)
            return res.status(401).json({erro: error.message})
        }
    }
}

module.exports = new VideoController();