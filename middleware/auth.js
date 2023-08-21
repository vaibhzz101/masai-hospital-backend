const jwt = require('jsonwebtoken');
require('dotenv').config()

function verifyToken(req,res,next) {
    const token = req.headers.authorization;
    if(!token){
        return res.status(403).json({message: 'No token found'})
    }
    jwt.verify(token, process.env.jwt_secret, (err, decoded) => {
        if(err){
            return res.status(500).json({message: 'authentication falied'})
        }
        req.userId = decoded.indexOf;
        next();
    });
}
module.exports = 
    verifyToken;
