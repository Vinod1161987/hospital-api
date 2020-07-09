const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');

// routes
router.post('/authenticate', authenticate);
module.exports = router;

async function authenticate(req, res, next) {
    const username=req.headers['userId'];
    const password=req.headers['userPassword'];
    userService.authenticateJWT({username,password})
        .then(user => res.json(user))
        .catch(next);
}

