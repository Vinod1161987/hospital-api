const patientService = require('../services/patient.service');

class PatientController {
    constructor() { }
    async add(req, res, next) {
        await userService.registration(req.body)
            .then(response => res.json(response))
            .catch(next);
    }   
}
module.exports = PatientController;