var firebase = require('firebase');
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
      res.push(childSnapshot.val())
    });
  }
  console.log(res);
  return res;
}

module.exports = {
  addAsync,
  getPatientListAsync
};