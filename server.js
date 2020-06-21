
const express = require('express');


const bodyParser = require('body-parser');
const errorHandler = require('./_helper/error-handler');
const addheaders = require('./middleware/headers');
const authenticateJWT  = require('./middleware/authenticateJWT ');

const app = express();

app.use(bodyParser.json());
app.use(authenticateJWT);
app.use(addheaders);

// const awaitHandlerFactory = (middleware) => {
//     return async (req, res, next) => {
//         // await middleware(req, res, next)
//         middleware(req, res, next)
//         .catch(next);
//     }
//   }

app.use('/users', require('./controllers/users.controller'));




app.get('/',(req,res)=>
{
    // console.log("HTTP Get Request");
	// var userReference = firebase.database().ref("/User/");

    // console.log(userReference);
	// //Attach an asynchronous callback to read the data
	// userReference.on("value", 
	// 		  function(snapshot) {
	// 				console.log(snapshot.val());
	// 				res.json(snapshot.val());
	// 				userReference.off("value");
	// 				}, 
	// 		  function (errorObject) {
	// 				console.log("The read failed: " + errorObject.code);
	// 				res.send("The read failed: " + errorObject.code);
	// 		 });

});

app.use(errorHandler);
app.listen(3000, () => {
    console.log('Authentication service started on port 3000');
});