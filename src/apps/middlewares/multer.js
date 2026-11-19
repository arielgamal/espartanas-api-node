const multer  = require('multer')
const path = require('path')
const crypto = require('crypto')

const upload = multer({
    dest: path.resolve(__dirname, '..', '..', '..', 'uploads'),
    storage: multer.diskStorage({
        destination: path.resolve(__dirname, '..', '..', '..', 'uploads'),
        filename(req, file, callback) {
            crypto.randomBytes(16, (err, hash) => {
                if(err) callback(err)
                const filename = `${hash.toString('hex')}_${file.originalname}`
                return callback(null, filename)
            })
        }
    }),
    limits: {
        fileSize: 2 * 1024 * 1024 //2MB
    },
    fileFilter: (req, file, callback) => {
        const allowedMimes = ['image/jpg', 'image/jpeg', 'image/png', 'image/gif'];
        if (allowedMimes.includes(file.mimetype)) {
            return callback(null, true)
        } else {
            cb(new Error('Tipo de imagem inválido'))
        }
    }
})

module.exports = upload