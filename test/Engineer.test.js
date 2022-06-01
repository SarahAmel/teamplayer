const Engineer = reqire("./lib/Engineer");

//use github instead of office number

describe(" getgithub",()=> {
    it ("gets github name", () => {
    const githubName = "sally ";
    const e = new Engineer("silly sally"," 777","sally7@email.com",githubName);
    expect(e.githubName()) .toBe(githubName);
    
    });
});




it ("set git hub via arg", () => {

const githubName = "sally";

const e = new Engineer("sally smith","777","sally7@gmail.com",githubName);

expect(e.githubName) .toBe(githubName);

});



describe("getRole",()=> {
    it (" gets Enginner back from fun", () => {
    const Engineer = "Engineer";

    const e = new Engineer("silly sally"," 777","sally7@email.com", "sally");
    expect(e.getRole()) .toBe(Engineer);
    
    });
});

