
const jwt = require('jsonwebtoken');
const users = require('../../API/db/userdb');

function authenticateJWT (req, res,next) {
    
    // Read username and password from request body
    const { username, password } = req.body;
    // Filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });
    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username,  role: user.role }, config.secret);
        
        res.json({
            accessToken
        });
    } else {
        res.send('Username or password incorrect');
    }
};

module.exports = authenticateJWT;