const express = require('express');
const router = express.Router();
const userService = require('../services/user.service');

// routes
router.post('/authenticate', authenticate);
module.exports = router;

async function authenticate(req, res, next) {
    userService.authenticateJWT(req.body)
        .then(user => res.json(user))
        .catch(next);
}

