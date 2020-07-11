const config = require('../config.json');
const jwt = require('jsonwebtoken');

module.exports = authenticateJWT;

function authenticateJWT(req, res, next) {

    console.log("authenticateJWT..." + req.url);
    console.log("authenticateJWT..." + req.headers);
    
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        console.log("config.secret");
            console.log(config.secret);
        if (token == null) return res.sendStatus(401) // if there isn't any token
        jwt.verify(token, config.secret, (err, user) => {
            console.log("user");
            console.log(user);
            if (err) {
                return res.sendStatus(403);
            }
            req.user = user;
            next();
        });
    } else {
        return res.sendStatus(400);
    }
};