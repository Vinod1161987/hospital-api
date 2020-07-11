
var unless = require('express-unless');
const express = require('express');
const user = require('./routes/user')
const bodyParser = require('body-parser');
let errorHandler = require('./_helper/error-handler');
let addheaders = require('./middleware/headers');
let authenticateJWT = require('./middleware/authenticateJWT');

const app = express();

app.use(bodyParser.json());
app.get('/favicon.ico', (req, res) => res.status(204));
app.use(addheaders);
app.use('/user', user);
authenticateJWT.unless = unless;
app.use(authenticateJWT.unless({path: ['/user/authenticate']}));

// const awaitHandlerFactory = (middleware) => {
//     return async (req, res, next) => {
//         // await middleware(req, res, next)
//         middleware(req, res, next)
//         .catch(next);
//     }
//   }
app.get('/', (req, res) => {
    console.log('default method called..');
});

app.use(errorHandler);
app.listen(3000, () => {
    console.log('Authentication service started on port 3000');
});