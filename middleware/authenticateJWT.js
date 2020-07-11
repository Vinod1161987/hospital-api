const config = require('../config.json');
const jwt = require('jsonwebtoken');

module.exports = authenticateJWT;

function authenticateJWT(req, res, next) {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401) // if there isn't any token
        jwt.verify(token, config.secret, (err, user) => {
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