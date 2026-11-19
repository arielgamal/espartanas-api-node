const validateMiddleware = (schema) => async (req, res, next) => {
    try {
        await schema.validate(req.body)
        return next()
    } catch (error) {
        return res.status(400).send({erro: error.errors});
    }   
}

module.exports = validateMiddleware