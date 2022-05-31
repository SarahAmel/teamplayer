class Employee {
    constructor(name, id, email){
    this.name = name;

    this.id = id;

    this.email = email;
}

// gets name of person
getName(){
 return this.name;
}

// gets the id of person
getId(){
 return this.id;

}


//gets email of person

getEmail(){
    return  this.email;
}


// gets the role the person has in companny
getRole(){
    return "Employee";
}
}


moduel.exports = Employee; 