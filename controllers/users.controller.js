const userService = require('../services/user.service');

class UserController {
    constructor() { }
    async authenticate(req, res, next) {
        console.log("UserController - Authenticate called...")
        console.log(req.headers);
        const username=req.headers['userid'];
        const password=req.headers['userpassword'];
        if (!username || !password) {
            // return 401 error is username or password doesn't exist, or if password does
            // not match the password in our records
            return res.status(400).end();
        }
         await userService.authenticateJWT({username,password})
            .then(user => res.json(user))
            .catch(next);// Errors will be passed to Express.
    }
}
module.exports = UserController;