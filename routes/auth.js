//routes 1.setting up router

const express =  require('express')
const router = express.Router()

//import both of the functions from auth.js controller
const {login, register} = require ('../controllers/auth')

//setting up routes with the methods
router.post('/register', register)
router.post('/login', login)

module.exports =  router