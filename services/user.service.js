const jwt = require('jsonwebtoken');
const users = require('../../API/db/userdb');
const config = require('../config.json');

async function authenticateJWT ({ username, password }) {
    
    // Read username and password from request body
    // const { username, password } = req.body;
    // Filter user from the users array by username and password
    const user = users.find(u => { return u.username === username && u.password === password });
    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.username,  role: user.role }, config.secret);
        return accessToken;
        // res.json({
        //     accessToken
        // });
    } else {
      throw 'Username or password incorrect';
    }
};

module.exports = {
  authenticateJWT
};