const jwt = require('jsonwebtoken');


module.exports.authenticationChecker = (req, res, next) => {
    const decoded = jwt.verify(
        req.headers.authorization,
        "BnNodeBoilerplate_GtvhkLRTgtNdGl"
    );
   
    //   console.log(decoded, "decoded >>>>>>>>>>>>>>>>");

      if(decoded.userId){
        next()
      }else{
        res.send({
            status : "you have no access"
        })
      }
  };
