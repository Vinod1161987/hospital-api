const jwt = require('jsonwebtoken');
const users = require('../db/userdb');
const config = require('../config.json');
const response =require('../db/userdb');

async function authenticateJWT ({ username, password }) {
    
    // Read username and password from request body
    // const { username, password } = req.body;
    // Filter user from the users array by username and password
    const usersobj = await users.getusersAsync();
    const user = usersobj.find(u => { return u.Name.toString() === username && u.Password.toString() === password });
    if (user) {
        // Generate an access token
        const accessToken = jwt.sign({ username: user.NAME,  role: user.role }, 
            config.secret);
        return  response.getresponse(true,{token:accessToken});  
    } else {
      throw 'Username or password incorrect';
    }
};

module.exports = {
  authenticateJWT
};