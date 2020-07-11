const jwt = require('jsonwebtoken');
const users = require('../db/userdb');
const config = require('../config.json');
const response =require('../_helper/response');

async function authenticateJWT ({ username, password }) {
    
    // Read username and password from request body
    // const { username, password } = req.body;
    // Filter user from the users array by username and password
    
    const usersobj = await users.getusersAsync();
    console.log("username");
    console.log(username);
    const user = usersobj.find(u => { return u.Name.toString() === username.toString() && u.Password.toString() === password.toString() });
    if (user) {
        // Generate an access token
        const accessToken = jwt.sign(
          { username: user.Name,  role: user.role }, 
          config.secret,
          {expiresIn: '2h'}
          );
        return  response.getresponse(200,'OK',{
          tokenType: "Bearer",
          accessToken: accessToken,
          expiredIn: '2h'
        });  
    } else {
      throw 'Username or password incorrect';
    }
};

module.exports = {
  authenticateJWT
};