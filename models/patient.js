
function Patient() {
}

Patient.prototype.SetId= function(id)
{
    this.id=id;
}
Patient.prototype.SetfirstName= function(firstName)
{
    this.firstName=firstName;
}
Patient.prototype.SetmiddleName= function(middleName)
{
    this.middleName=middleName;
}
Patient.prototype.SetlastName= function(lastName)
{
    this.lastName=lastName;
}
Patient.prototype.Setage= function(age)
{
    this.age=age;
}
Patient.prototype.Setgender= function(gender)
{
    this.gender=gender;
}
Patient.prototype.SetmobileNo= function(mobileNo)
{
    this.mobileNo=mobileNo;
}
Patient.prototype.SetemergencyContactNo= function(emergencyContactNo)
{
    this.emergencyContactNo=emergencyContactNo;
}
Patient.prototype.Setaddress= function(address)
{
    this.address=address;
}

module.exports =Patient;