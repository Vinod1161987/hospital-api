
const express = require('express');

const bodyParser = require('body-parser');
const errorHandler = require('./_helper/error-handler');
// const authenticateJWT = require('./_helper/jwt');
const addheaders = require('./middleware/headers');
const authenticateJWT  = require('./middleware/authenticateJWT ');

const app = express();

app.use(bodyParser.json());
app.use(authenticateJWT);
app.use(addheaders);

app.use('/users', require('./controllers/users.controller'));


app.get('/',(req,res)=>
{
 res.end('Hello World\n');

});

app.use(errorHandler);
app.listen(3000, () => {
    console.log('Authentication service started on port 3000');
});