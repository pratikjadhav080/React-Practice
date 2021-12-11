//test suit - collection of tests
//tests..
const Add = require("../index")

test("addition of two positive numbers",function(){
    expect(Add(1,2)).toBe(3)
    expect(Add(2,2)).toBe(4)
    expect(Add(2,6)).toBe(8)
})