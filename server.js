
var unless = require('express-unless');
const express = require('express');
const user = require('./routes/user')
const patient = require('./routes/patient')
const bodyParser = require('body-parser');
let errorHandler = require('./_helper/error-handler');
let addheaders = require('./middleware/headers');
let authenticateJWT = require('./middleware/authenticateJWT');
const config = require('./configurations/config');
const app = express();
// environment variables
process.env.NODE_ENV = 'DEV';

app.use(bodyParser.json());
app.get('/favicon.ico', (req, res) => res.status(204));
app.use(addheaders);

app.use('/user', user);
app.use('/patient', patient);
authenticateJWT.unless = unless;
app.use(authenticateJWT.unless({path: ['/user/authenticate']}));
app.get('/', (req, res) => {
    console.log('default method called..');
});

app.use(errorHandler);
app.listen(3000, () => {
    console.log('Authentication service started on port 3000');
});