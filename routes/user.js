const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users.controller");
let userController = new UserController();
router.get("/", (req, res, next) => {   
    console.log("default route get all users") ;
    next();
})
router.post("/authenticate", async (req, res, next) => {   
    console.log("authenticate-Post") ;
   await userController.authenticate(req, res, next);
    //next();
})
router.get("/user/authorize", (req, res, next) => {   
    console.log("authorize-Post") ;
    userController.authenticate (req, res, next);
    next();
})


module.exports = router;