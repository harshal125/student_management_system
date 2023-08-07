
const examController = require('./examController')



const express = require('express');
const router = express.Router();

router.route('/create-exam').post(examController.createExam );
router.route('/add-mcq').post(examController.addMcq );
router.route('/launch-exam').post(examController.launchExam);

router.route('/review-exam').post(examController.reviewExam);




module.exports = router