
const authenticationController = require('./authenticationController')



const express = require('express');
const router = express.Router();

router.route('/login').post(authenticationController.login);
router.route('/register').post(authenticationController.register);



module.exports = router