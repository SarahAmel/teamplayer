//require manager and employee from lib 

const Manager = require ("./lib/Manager");
const Employee = require ("./lib/Employee");

// can set office number 
describe ("set office number via constuctor argument", ()=> {
const office = 4;
const e = new Manager("Bob Ross", "360", "bobbyjr@rossmail.com, office");
expect (e.officeNmuber).toBe(testVal);


})

// can get office number 

it (" set office number", () => {
    const officeNmuber = 4;
    
    const e = new Manager("Bobb Ross", "630","bobbyjr@rossmail.com", officeNmuber);
    
    expect
    (e.officeNmuber) .toBe(officeNmuber);

    });

//role returns manager 


describe("getRole",() => {
    it (" gets manager from fun", () => {
    const Manager = "Manager";
    const e = new Manager ("Bobb Ross", "630","333888@email.com","4");
    expect(e.getRole()) .toBe(Manager);
    
    });
});