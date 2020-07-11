module.exports = authenticateJWT;

function authenticateJWT(req, res, next) {

    console.log("authenticateJWT..." + req.url);

    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (authHeader) {
        const token = authHeader.split(' ')[1];
        if (token == null) return res.sendStatus(401) // if there isn't any token
        jwt.verify(token, accessTokenSecret, (err, user) => {
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