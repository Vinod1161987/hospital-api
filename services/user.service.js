const jwt = require('jsonwebtoken');
const users = require('../db/userdb');
const config = require('../config.json');
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
      config.secret,
      { expiresIn: `${config.tokenExpirePeriodInHour}h` }
    );
    return response.getresponse(200, 'OK', {
      tokenType: "Bearer",
      accessToken: accessToken,
      expiredIn: config.tokenExpirePeriodInHour * 60 * 60
    });
  } else {
    throw 'Username or password incorrect';
  }
};


async function registration(user) {
  const message = await users.registerUsersAsync(user);
  if (message === '200') {
    return response.getresponse(200, 'OK', {
      message: "user created sucessfully"
    });
  } else {
    throw '"Something went wrong';
  }
}

module.exports = {
  authenticateJWT,
  registration
};