// require the employee from the lib folder//

const  Employee = require("../lib/Employee");


const e = new Employee("name","111","123654@email.com")


//test can begin employee instance //

describe("Employee",()=>{
it ("Begin the instance of employee", () =>{

const e = new Employee();
expect(new Employee(e)) .toBe("object");

});

it("Can set a name with the constructor arguments",()=>{

    const name = "Vandelay";
    const e = new Employee (name);
    expect (e.name) .toBe(name);
});




// test can set a name via constructor args //

it("can set a name with the constructor arguments",()=>{

const Name = "Bobby Brown";
const e = new Employeev( Name );
expect(e.Name) .toBe(Name);

});


// can set id via constructor args 
it ("set id with constructor arguments", () =>{

    const idNumber = 111;
    const e = new Employee("Bobby Brown",idNumber);
    expect(e.id) .toBe(idNumber);
});


// can set email via constructor args 

it ("getEmail", () =>{
const getEmail = "123654@email.com";
    const e = new Employee("Bobby Brown","111",getEmail);
    expect(e.email()) .toBe(getEmail);
});



// can set name via constructor function


describe("getName",()=>{
    it ("can get name from function", () => {
    const name = "Bobby Brown";
    const e = new Employee("Bobby Brown");
    expect((e.getName)) .toBe(Name);
    
    });
    
});


// can set id via constructor function 


describe("getid",()=>{
    it ("gets id from function", () => {
    const idNumber = 111
    const e = new Employee("Bobby Brown",idNumber);
    expect((e.getid())) .toBe("idNumber");
    
    });
    
});


// can get email via constructor function
describe("getEmail",()=> {

    it ("gets email from function", () => {

    const getEmail = "123654@getEmail.com";
    const e = new Employee("Bobby Brown","111",getEmail);
    expect(e.getEmail()) .toBe(getEmail);
    });

});



// role function should return employee 


describe("getRole",()=> {
    it (" gets role from function", () => {
    const role = "Employee";
    const e = new Employee("Bobby Brown", "111","123654@email.com");
    expect((e.getRole())) .toBe("role");
    
    });
});
