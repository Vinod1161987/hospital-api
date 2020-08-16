var firebase = require('firebase');
var patient =require('./../models/patient');
const db = require('./connectiondb');

// firebase.initializeApp(db.config);


if (!firebase.apps.length) {
  firebase.initializeApp(db.config);
}

async function addAsync(user) {
  var status = '';
  var userReference = firebase.database().ref("/Patient/");
  await userReference.push(user, (err) => {
    if (err) {
      status = "300";
    }
    else {
      status = "200";
    }
  }
  );
  return status;
}

async function getPatientListAsync() {
  var res = [];
  var patientReference = firebase.database().ref("/Patient/");
  var snapshot = await patientReference.once('value');
  if (snapshot.exists()) {
    snapshot.forEach(function (childSnapshot) {
      var p = new patient();
      p.SetId(childSnapshot.key);
      p.Setage(childSnapshot.val().address);
      p.Setage(childSnapshot.val().age);
      p.SetfirstName(childSnapshot.val().firstName);
      p.SetemergencyContactNo(childSnapshot.val().emergencyContactNo);
      p.Setgender(childSnapshot.val().gender);
      p.SetlastName(childSnapshot.val().lastName);
      p.SetmiddleName(childSnapshot.val().middleName);
      p.SetmobileNo(childSnapshot.val().mobileNo);
      res.push(p)
    });
  }
  return res;
}

module.exports = {
  addAsync,
  getPatientListAsync
};