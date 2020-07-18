const jwt = require('jsonwebtoken');
const users = require('../db/userdb');
const response = require('../_helper/response');

async function add(user) {
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
  add
};