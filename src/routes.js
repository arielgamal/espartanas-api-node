const { Router } = require('express');
const verifyJwt = require('./apps/middlewares/authentication');
const verifyPremium = require('./apps/middlewares/premiumAuthMiddleware');
const validateMiddleware = require('./apps/middlewares/validateMiddleware');
const validCPF = require('./apps/middlewares/validCPF');
const AuthenticationController = require('./apps/controllers/AuthenticationController');
const DivisaoController = require('./apps/controllers/DivisaoController');
const PaymentController = require('./apps/controllers/PaymentController');
const PremiumController = require('./apps/controllers/PremiumController');
const SupportController = require('./apps/controllers/SupportController');
const UserController = require('./apps/controllers/UserController');
const VideoController = require('./apps/controllers/VideoController');
const ValidateAccountController = require('./apps/controllers/ValidateAccountController');
const WorkoutController = require('./apps/controllers/WorkoutController');
const createUserSchema = require('./schema/createUserSchema');
const creditCardPaymentSchema = require('./schema/creditCardPaymentSchema');
const upload = require('./apps/middlewares/multer');
const routes = new Router();

//ROTAS QUE NÃO PRECISAM DE LOGIN
routes.get('/', (req, res) => {
    res.send({message : "ESPARTAAANS!! WHAT IS YOUR PROFESSION ??"})
})

routes.post('/payments-webhook', PaymentController.paymentWebhook);
routes.get('/avatar_public/:avatar', UserController.public_avatar)
//Cria usuário
routes.post('/user', validateMiddleware(createUserSchema), validCPF, UserController.create)

//Loga com usuário
routes.post('/auth', AuthenticationController.authenticate)

//Esqueci password(não pronto)
routes.post('/forgot_password', AuthenticationController.forgotPassword)

//verifica se possui um email cadastrado
routes.post('/has_email', AuthenticationController.hasEmail)

//Lista a divisão de treino
routes.get('/divisao', DivisaoController.listAll)
routes.get('/iniciante_divisao', DivisaoController.inicianteList)

//Validar conta (tornar valid_account === true e cria um usuário no ASAAS)
routes.put('/validate_account', ValidateAccountController.validateAccount)

//renviar token
routes.put('/resend_token', AuthenticationController.resendToken)

//rota post que adiciona exercícios
routes.post('/add_workouts', WorkoutController.addWorkout)

//rota post que adiciona links de videos
routes.post('/add_videos', VideoController.addVideo)

//rota de planos
routes.get('/plans', SupportController.plans)

//ROTAS QUE PRECISAM ESTAR LOGADOS
routes.use(verifyJwt)
//Lista usuário logado pelo token??
routes.get('/me', UserController.findUserById)
routes.get('/myself', UserController.findUserById)

//Lista todos usuários
routes.get('/users', UserController.showUsers)

//Atualiza o password
routes.put('/update_password', UserController.updatePassword)

//Atualiza o usuário
routes.put('/update_user', UserController.updateUser)

//Atualiza o avatar
routes.post('/update_avatar', upload.single('avatar'), UserController.updateAvatar)

//Visualiza avatar
routes.get('/avatar', UserController.avatar)

// Rota 'fale conosco'.
routes.post('/support', SupportController.contactUs )

// Rota para usuário saber o número de dias de premium
routes.get('/premium_status', PremiumController.premiumStatus)

// Rota para ter um freetrial de 1 dia
routes.post('/free_trial/:days', PremiumController.freeTrial)

//Rota para premium de 30 dias
routes.post('/premium_30_days', PremiumController.premium30days)

// ROTAS DE PAGAMENTO
routes.post("/payment_credit", validateMiddleware(creditCardPaymentSchema), PaymentController.paymentCredit)
routes.post("/payment_pix", PaymentController.paymentPIX)
routes.post("/payment_boleto", PaymentController.paymentBoleto)
routes.post("/payment", PaymentController.payment)

//ROTAS QUE PRECISAM SER PREMIUM ACCOUNT (...)
routes.use(verifyPremium)

//Rota que mostra todos os exercicios no banco
routes.get('/allworkouts', WorkoutController.allWorkouts)

//rota post que lista todos os treinos iniciante do mes vigente
routes.get('/iniciante/:mes/:divisao', WorkoutController.inicianteWorkout)

//rota post que lista todos os treinos intermediarios do mes vigente
routes.get('/intermediario/:mes/:divisao', WorkoutController.intermediarioWorkout)

//rota post que lista todos os treinos avancados do mes vigente
routes.get('/avancado/:mes/:divisao', WorkoutController.avancadoWorkout)

//Rota que mostra todos os vídeos do banco
routes.get('/allvideos', VideoController.allVideos)

// Rota que lista todos os videos iniciante
routes.get('/video/iniciante/:mes', VideoController.inicianteVideo)

// Rota que lista todos os videos intermediario
routes.get('/video/intermediario/:mes', VideoController.intermediarioVideo)

// Rota que lista todos os videos avancado
routes.get('video/avancado/:mes', VideoController.avancadoVideo)


module.exports = routes;