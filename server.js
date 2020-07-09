
const express = require('express');


const bodyParser = require('body-parser');
const errorHandler = require('./_helper/error-handler');
const addheaders = require('./middleware/headers');
const authenticateJWT  = require('./middleware/authenticateJWT ');

const app = express();

app.use(bodyParser.json());
app.use(addheaders);
app.use(authenticateJWT);

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

});

app.use(errorHandler);
app.listen(3000, () => {
    console.log('Authentication service started on port 3000');
});