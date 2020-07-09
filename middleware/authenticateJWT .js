module.exports = authenticateJWT;

function authenticateJWT (req, res, next) {

    console.log(req.url);
    if(req.url =='/users/authenticate')
    {
        console.log('next');
        next();
    }
    else{
       
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if (authHeader) {
        const token = authHeader.split(' ')[1];

        jwt.verify(token, accessTokenSecret, (err, user) => {
            if (err) {
                return res.sendStatus(403);
            }

            req.user = user;
            next();
        });
    } else {
        throw 'UnauthorizedError';
    }
}
};