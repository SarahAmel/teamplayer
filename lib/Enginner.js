const Employee = require ("./lib/Employee");



class Engineer extends Employee{

constructor(name, id, email, officeNumber){

    super (name, id, email);

    this.officeNumber = officeNumber;

}


getRole(){
    return "Engineer";
}



}


moduel.exports = Engineer;