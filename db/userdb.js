var firebase = require('firebase');
const db= require('./connectiondb');

firebase.initializeApp(db.config);


async function getusersAsync()
{ 
  var res = [];
	var userReference = firebase.database().ref("/User/");
    var snapshot =  await userReference.once('value'); 
    if(snapshot.exists()) {
        snapshot.forEach(function(childSnapshot) {  
          res.push(childSnapshot.val())
        });
      }
    return res;         
}

module.exports= {getusersAsync};