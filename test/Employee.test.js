// require the employee from the lib folder//

const  Employee = require("../lib/Employee");





//test can begin employee instance //


describe("Employee",()=>{


it ("Begin the instance of employee", () =>{

const e = new Employee();
expect(new Employee(e)) .toBe("object")

});

it("Can set a name with the constructor arguments",()=>{

    const name = "Vandelay";
    const e = new Employee (name);
    expect (e.name) .toBe(name);
})

})


// test can set a name via constructor args //




// can set id via constructor args 






// can set email via constructor args 






// can set name via constructor function






// can set id via constructor function 





// can get email via constructor function




// role function should return employee 