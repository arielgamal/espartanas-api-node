// const { Validator, SchemaError } = require('jsonschema')

// const v = new Validator()

// const schemaValidador = (schema) => (req, res, next) => {
//     const result = v.validate(req.body, schema)
//     if(!result.valid) {
//         const messageError = [];

//         for(const item of result.errors) {
//             messageError.push(item.message);
//         }
//         res.status(401).send({messageError})
//     }
//     next();
// }

// module.exports = schemaValidador