//the super is the goodie bag/ super market/ you are grabbing what you need from it 

const Employee = require ("./Employee");

class Manager extends Employee{

constructor(name, id, email, officeNumber){

    super (name, id, email);
//use this structure for school(inntern) and github(enginner)
    this.officeNumber = officeNumber;

}

getRole(){
    return "Manager";
}

getOfficeNumber(){
    return this.officeNumber;
}

}





moduel.exports = Manager;
