const jwt = require('jsonwebtoken');
const secret = 'secretssh';

const withAuth = (req, res, next) => {
    const token = 
        req.body.token ||
        req.query.token ||
        req.headers['x-access-token'] ||
        req.cookies.token;

    if(!token){
        res.status(401).json({error : "Not token provided"});
    }else{
        jwt.verify(token, secret, (err, decoded) => {
            if(err){
                res.status(401).json({error : "Invalid token"});
            } else {
                req.email = decoded.email;
                next();
            }
        })
    }
}

module.exports = withAuth;