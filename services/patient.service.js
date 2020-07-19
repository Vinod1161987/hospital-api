const jwt = require('jsonwebtoken');
const patientdb = require('../db/patientdb');
const response = require('../_helper/response');

async function add(user) {
  const message = await patientdb.addAsync(user);
  if (message === '200') {
    return response.getresponse(200, 'OK', {
      message: "user created sucessfully"
    });
  } else {
    throw '"Something went wrong';
  }
}


async function getPatientList() {
  const Patients = await patientdb.getPatientListAsync();
  if (Patients) {
    // Generate an access token
    return response.getresponse(200, 'OK', {
      Patients
    });
  } else {
    throw 'Something went wrong';
  }
}

module.exports = {
  add,
  getPatientList
};