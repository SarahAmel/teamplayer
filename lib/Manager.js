
//the super is the goodie bag/ super market/ you are grabbing what you need from it 

const Employee = require ("./Employee");

class Manager extends Employee{

constructor(name, id, email, officeNumber){

    super (name, id, email);

    this.officeNumber = officeNumber;

}

}


moduel.exports = Manager;
