const Employee = require ("./lib/Employee");



class Engineer extends Employee{
//use github instead of office number
constructor(name, id, email, githubName){

    super (name, id, email);

    this.githubName = githubName;

}


getRole(){
    return "Engineer";
}



}


moduel.exports = Engineer;