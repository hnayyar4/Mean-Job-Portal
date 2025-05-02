const jwt = require('jsonwebtoken')
const privateKey ='myproject123'

module.exports = (req,res,next)=>{
    var token = req.headers['Authorization'];
    jwt.verify(token,privateKey,function(err,result){
        if(err==null){
            req.body['tokendata'] = result;
            next();

        }
        else{
            res.json({
                status:403,
                success:false,
                message:"Token not found, please login to proceed"
            })
        }
    })

}