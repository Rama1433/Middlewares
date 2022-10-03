const router =  require('express').Router();
const {index, contact, services, about, admin, login} = require('../controllers/mainController')

const adminCheck = require('../middlewares/adminCheck')

router
    .get('/', index)
    .get('/contact', contact)
    .get('/services', services)
    .get('/about', about)
    .get('/admin',adminCheck, admin)
    .get('/login', login)


module.exports = router