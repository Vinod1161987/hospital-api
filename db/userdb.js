var firebase = require('firebase');
const db= require('./connectiondb');

firebase.initializeApp(db.config);


async function getUsersAsync()
{ 
  console.log("1");
  var res = [];
  var userReference = firebase.database().ref("/User/");
  console.log("2");
    var snapshot =  await userReference.once('value'); 
    console.log("3");
    if(snapshot.exists()) {
      console.log("4");
        snapshot.forEach(function(childSnapshot) {  
          res.push(childSnapshot.val())
        });
      }
      console.log("5");
    return res;         
}

module.exports= {getUsersAsync};