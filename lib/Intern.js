const Employee = require ("./lib/Employee");



class intern extends Employee{

constructor(name, id, email, officeNumber){

    super (name, id, email);

    this.officeNumber = officeNumber;

}

getposition(){
    return "intern";
}


}


moduel.exports = intern;