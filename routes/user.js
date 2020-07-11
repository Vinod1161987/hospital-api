const express = require("express");
const router = express.Router();
const UserController = require("../controllers/users.controller");
let userController = new UserController();
router.get("/", (req, res, next) => {   
    console.log("default route get all users") ;
    next();
})
router.post("/authenticate", async (req, res, next) => {   
   await userController.authenticate(req, res, next);
})
router.get("/authorize", (req, res, next) => {   
    userController.authenticate (req, res, next);
})

router.post("/registration", (req, res, next) => {   
    userController.registration (req, res, next);
})

module.exports = router;