var firebase = require('firebase');
const db = require('./connectiondb');

firebase.initializeApp(db.config);


async function getUsersAsync() {
  var res = [];
  var userReference = firebase.database().ref("/User/");
  var snapshot = await userReference.once('value');
  if (snapshot.exists()) {
    snapshot.forEach(function (childSnapshot) {
      res.push(childSnapshot.val())
    });
  }
  return res;
}

async function registerUsersAsync(user) {
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

module.exports = {
  getUsersAsync,
  registerUsersAsync
};