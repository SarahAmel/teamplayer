const Employee = require ("./lib/Employee");



class intern extends Employee{
// instead of office number use school 
constructor(name, id, email, school){

    super (name, id, email);

    this.school = school;

}

getrole(){
    return "intern";
}



getschool(){
    return this.school;
}


}


moduel.exports = intern;