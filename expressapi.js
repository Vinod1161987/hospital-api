const express = require('express');

const server = express();

var firebase = require('firebase');
var config = {
    apiKey: "AIzaSyAdkOoKMlxudmXrC4hoe_fK8RzTR-oB3Cs",
    authDomain: "elite-schedule-app-e636b.firebaseapp.com",
    databaseURL: "https://elite-schedule-app-e636b.firebaseio.com",
    projectId: "elite-schedule-app-e636b",
    storageBucket: "elite-schedule-app-e636b.appspot.com",
    messagingSenderId: "513418301166",
    appId: "1:513418301166:web:74ea13d02b540f9d86adff",
    measurementId: "G-GG50Z53GYD"
};
firebase.initializeApp(config);


const bookrouter= express.Router();
bookrouter.route('/book')
.get((req,res)=>{
    const response ={hello:'This is my PAI'};
    res.json(response);
});

server.use('/api',bookrouter);
server.get('/',(req,res)=>
{
    console.log("HTTP Get Request");
	var userReference = firebase.database().ref("/User/");

    console.log(userReference);
	//Attach an asynchronous callback to read the data
	userReference.on("value", 
			  function(snapshot) {
					console.log(snapshot.val());
					res.json(snapshot.val());
					userReference.off("value");
					}, 
			  function (errorObject) {
					console.log("The read failed: " + errorObject.code);
					res.send("The read failed: " + errorObject.code);
			 });
})

server.get('/about',(req,res)=>
{
    res.send('Hello about');
})

server.listen(4232,()=>{
    console.log('Express server is running');
})