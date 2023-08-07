const express = require('express');
const router = express.Router();

const studentRoutes = require('../microServices/modules/student/studentRoutes');
// const markRoutes = require('../microServices/modules/mark/markRoutes');
const examRoutes = require('../microServices/modules/exam/examRoutes');
const authenticationController = require('../microServices/modules/authontication/authenticationRoutes')
const authenticationChecker = require('../middleware/authChecker')



router.use('/student', studentRoutes);
// router.use('/mark', markRoutes);
router.use('/exam', authenticationChecker.authenticationChecker , examRoutes);

router.use('/auth', authenticationController)


module.exports = router;
