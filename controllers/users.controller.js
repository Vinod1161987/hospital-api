const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');

// routes
router.post('/authenticate', authenticate);
module.exports = router;

async function authenticate(req, res, next) {
    console.log("=req.headers['userPassword']");
    console.log(req.headers['userid']);
    const username=req.headers['userid'];
    const password=req.headers['userpassword'];
    userService.authenticateJWT({username,password})
        .then(user => res.json(user))
        .catch(next);
}

