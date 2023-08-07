const studentController = require('./studentController');



const express = require('express');
const router = express.Router();

router.route('/add-student-list').post(studentController.addStudentList );
router.route('/exam-submission').post(studentController.SubmitExam);

module.exports = router