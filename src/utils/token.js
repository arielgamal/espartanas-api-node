const jwt = require('jsonwebtoken')

const decryptedToken = async (authHeader) => {
    // Bearer dsodd0293402e903kdwopasdkw09sd0ds
    const token = authHeader.split(' ')[1];
    // console.log(token)
    return jwt.verify(token, process.env.HASH_BCRYPT);
}

module.exports = { decryptedToken };