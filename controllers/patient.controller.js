const patientService = require('../services/patient.service');

class PatientController {
    constructor() { }
    async add(req, res, next) {
        await patientService.add(req.body)
            .then(response => res.json(response))
            .catch(next);
    }   

    async getPatients(req, res, next) {
        await patientService.getPatientList()
            .then(response => res.json(response))
            .catch(next);
    }   
}
module.exports = PatientController;