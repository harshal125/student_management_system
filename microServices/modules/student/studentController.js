

exports.addStudentList = async (req, res, next) => {

    console.log("inside the add student list >>>>>>>>>>>>>>>>>>>>>>>>")

    const {
        first_name,
        last_name,
        gender,
        age,
        division
    } = req.body

    try {

        await req.app.knexConnection('student_list').insert({
            first_name,
            last_name,
            gender,
            age,
            division
        });

        res.send({
            status : true,
            data : "student added successfully"
        })
        
    } catch (error) {
        res.send({
            status : false,
            data : error
        })
    }
    
};

module.exports.SubmitExam = async (req, res, next) => {

    const {
        exam_id,
        mcqs,
        slected_options
    } = req.body

    try {

        const examList = await req.app
        .knexConnection('exam_submission')
        .insert({
        exam_id,
        mcqs,
        slected_options
        })
        

        res.send({
            status : true,
            data : "submission added successfully"
        })
        
    } catch (error) {
        res.send({
            status : false,
            data : error
        })
    }
};