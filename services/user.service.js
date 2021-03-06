const jwt = require('jsonwebtoken');
const users = require('../db/userdb');
const response = require('../_helper/response');

async function authenticateJWT({ username, password }) {
  // Read username and password from request body
  // const { username, password } = req.body;
  // Filter user from the users array by username and password

  const userList = await users.getUsersAsync();
  const user = userList.find(usr => { return usr.Name.toString() === username.toString() && usr.Password.toString() === password.toString() });
  if (user) {
    // Generate an access token
    const accessToken = jwt.sign(
      { username: user.Name, role: user.role },
      global.gConfig.secret,
      { expiresIn: `${global.gConfig.tokenExpirePeriodInHour}h` }
    );
    return response.getresponse(200, 'OK', {
      tokenType: "Bearer",
      accessToken: accessToken,
      expiredIn: global.gConfig.tokenExpirePeriodInHour * 60 * 60
    });
  } else {
    throw 'Username or password incorrect';
  }
};

module.exports = {
  authenticateJWT
};