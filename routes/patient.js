const express = require("express");
const router = express.Router();
const PatientController = require("../controllers/patient.controller");
let patientController = new PatientController();
router.get("/", (req, res, next) => {   
    console.log("default route get all users") ;
    next();
})
router.post("/add", async (req, res, next) => {   
   await patientController.add(req, res, next);
})

module.exports = router;