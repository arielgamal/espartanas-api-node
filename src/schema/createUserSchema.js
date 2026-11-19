const yup = require('yup')

const createUserSchema = yup.object({
    firstname: yup.string().min(3).max(15).required(),
    lastname: yup.string().min(3).max(15).required(),
    birthdate: yup.string().required(),
    cpf: yup.string().min(14).max(14).required(),
    email: yup.string().email().required(),
    password: yup.string().min(5).matches(
        /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{5,}$/,
        "Must Contain 5 Characters, One Uppercase, One Lowercase, One Number and one special case Character").required(),
    privacypolitics: yup.boolean().required(),
    termsandservices: yup.boolean().required(),
})

module.exports = createUserSchema