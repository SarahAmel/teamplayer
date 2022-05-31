//require manager and employee from lib 

const Manager = require ("../lib/Manager");
const Employee = require ("../lib/Employee");

// can set office number 
describe ("set office number via constuctor argument", ()=>{
const office =100;
const e = new Manager("Bob Ross", 1, "bobbyjr@rossmail.com, office");
expect (e.officeNmuber).toBe(testVal);


})

// can get office number 


//role returns manager 


describe("getRole",()=> {
    it (" gets manager from function", () => {
    const role = "Manager";
    const e = new Manager ("Aeon", "333","333888@email.com","100");
    expect(e.getRole()) .toBe("manager");
    
    });
});