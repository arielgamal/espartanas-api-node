const { decryptedToken } = require('../../utils/token')
const { decrypt } = require('../../utils/crypt')
const jwt = require('jsonwebtoken')

const verifyJwt = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    if(!authHeader) {
        return res.status(400).json({message: "Unset token"})
    }
    try {
        const { id } = await decryptedToken(authHeader);
        req.userId = id
        return next()
    } catch(error) {
        return res.status(401).json({message: 'Unathorized!'})
    }
}

module.exports = verifyJwt