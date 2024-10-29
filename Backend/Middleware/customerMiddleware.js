const jwt = require('jsonwebtoken')
const  JWTSecret   = require('../config.js')

const customerMiddleware = (req,res,next) => {

    const authenticate = req.headers.authorization;   // extract token from header

    if(!authenticate || !authenticate.startsWith(`Bearer `)){  // check it start from Bearer or not
        return res.status(403).json({
            msg: "Invalid token"
        })
    }

    const token = authenticate.split(' ')[1]; // split the string on the basis of "  " it returns an array then you can get token from  arr[1]   // arr[0] have Bearer

    try{
        const decoded = jwt.verify(token,JWTSecret);   // verify token with JWTSecret
      
            req.userId = decoded.userId;   // find ObjectId
             next();            // pass to next middleware/Logic
    }
    catch(err){
        return res.status(403).json({
            msg: "Invalid token"
        })
    }
    
}

module.exports = customerMiddleware