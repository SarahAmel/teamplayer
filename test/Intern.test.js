const intern = require("./lib/intern");





describe("getSchool ",() => {
    it (" names the students school ", () => {
   
        const school = " rainbow sss";
   
        const e = new intern(" sprinkle dink", "007","sd007@email.com",school);
    
        expect(e.getSchool()) .toBe("school ");
    
    });
});




it (" set name of school from arg ", () => {
    const school = " rainbow sss";
    
    const e = new intern(" sprinkle dink", "007","sd007@email.com",school);

    });




describe("getRole ",() => {
    
    it (" gets intern from role ", () => {
    
    
        const intern= "intern";
    
    
        const e = new intern(" sprinkle dink", "007","sd007@email.com","rainbow sss");
    
    
        expect(e.getRole()) .toBe("intern");
    
    });
});