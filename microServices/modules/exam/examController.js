

module.exports.createExam = async (req, res, next) => {

    const {
        exam_title,
        exam_desc
    } = req.body

    try {

        await req.app.knexConnection('exam_list').insert({
            exam_title,
            exam_desc
        });

        res.send({
            status : true,
            data : "exam added successfully"
        })
        
    } catch (error) {
        res.send({
            status : false,
            data : error
        })
    }
};

module.exports.launchExam = async (req, res, next) => {

    const {
        exam_start_date,
        exam_end_date,
        is_exam_launch,
        id
    } = req.body

    try {

        await req.app.knexConnection('exam_list').update({
            exam_start_date,
            exam_end_date,
            is_exam_launch
        })
        .where({ id });

        res.send({
            status : true,
            data : "exam launch successfully"
        })
        
    } catch (error) {
        res.send({
            status : false,
            data : error
        })
    }
};


module.exports.addMcq = async (req, res, next) => {

    const {
        exam_id,
        mcq_desc,
        mcq_one,
        mcq_two,
        mcq_three,
        mcq_four
    } = req.body

    try {

        await req.app.knexConnection('exam_mcq').insert({
            exam_id,
        mcq_desc,
        mcq_one,
        mcq_two,
        mcq_three,
        mcq_four
        });

        res.send({
            status : true,
            data : "mcq added successfully"
        })
        
    } catch (error) {
        res.send({
            status : false,
            data : error
        })
    }
};


module.exports.reviewExam = async (req, res, next) => {

    const {
        exam_id,
        student_id
    } = req.body

    try {

        const [response] = await req.app
            .knexConnection('exam_submission')
            .select('exam_submission.*')
            .leftJoin(
                'student_list',
                'student_list.id',
                'exam_submission.student_id'
            )
            .leftJoin(
                'exam_list',
                'exam_list.id',
                'exam_submission.exam_id'
            )
            .where({ exam_id: exam_id });

            console.log(response, "response >>>>>>>>>>")

        
            const mcqs = await req.app
            .knexConnection('exam_mcq')
            .select('exam_mcq.*')
            .whereIn('exam_mcq.id', response.mcqs.split(','));

            console.log(mcqs, "response >>>>>>>>>>")


            let writeAns = []
            let wrongAns = []


            for (let i = 0; i < mcqs.length; i++) {
                // const element = array[i];
             const mcq = response.slected_options.split(',').includes(mcqs[i].right_mcq)
             if(mcq){
                writeAns.push(mcqs[i])
             }else{
                wrongAns.push(mcqs[i])
             }
            }

        res.send({
            status : "success",
            data : {
                wrongAns,
                writeAns
            }
        })
        
    } catch (error) {
        res.send({
            status : false,
            data : error
        })
    }
};
