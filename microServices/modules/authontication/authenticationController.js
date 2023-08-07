const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

module.exports.login = async (req, res, next) => {

    if (!req.body.email || !req.body.password) {
        res.send({
            status: "value missing"
        })
    }


    let knex = req.app.knexConnection('u_user').where({ user_email: req.body.email })


    try {
        const response = await knex;
        // console.log(response, 'jitu');
        if (response && response.length > 0) {
            const isPasswordMatch = bcrypt.compareSync(
                req.body.password,
                response[0].user_password ? response[0].user_password : ''
            );

            if (isPasswordMatch) {

                const token = jwt.sign(
                    {
                        email: response[0].user_email,
                        userId: response[0].user_id
                    },
                     "BnNodeBoilerplate_GtvhkLRTgtNdGl",
                    { expiresIn: 2 * 86000, }  // 2 day
                );

                // return responseService.sendResponse2(res, {
                //     user,
                //     token: !isMigratedAndHasntSetPwd ? token : null,
                // });
                res.send({
                    response,
                    token
                })
            } else {
               res.send({
                status : "password is wrong"
               })
            }
        } else {
            res.send({
                status : "user not exist"
               })
        }
    } catch (err) {
        console.log(err)
    }
};

module.exports.register = async (req, res, next) => {

    if (
        !req.body.email ||
        !req.body.password ||
        !req.body.mobile ||
        !req.body.first_name ||
        !req.body.last_name
    ) {
        res.sed({
            status: "plese enter proper data"
        })
    }

    try {
        const data = await req.app
            .knexConnection('u_user')
            .where({ user_email: req.body.email });

        if (data && data.length > 0) {
            res.send({
                status: "user is already exist"
            })
        }

        let user = {
            user_email: req.body.email,
            user_mobile_number: req.body.mobile.toString(),
            user_first_name: req.body.first_name,
            user_last_name: req.body.last_name,
        };

        user.user_password = await bcrypt.hash(req.body.password, 10);



        const insert_response = await req.app
            .knexConnection('u_user')
            .insert(user);

        if (!insert_response || insert_response.length === 0) {
            res.send({
                status: "anable to insert"
            })
        }

        const response = await req.app
            .knexConnection('u_user')
            .select()
            .where({ user_email: req.body.email });


        res.send({
            status: "user Registered plese login"
        })
    } catch (err) {
        console.log(err)
    }
};