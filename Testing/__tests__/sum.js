//test suit - collection of tests
//tests..
const Add = require("../index")

test("addition of two positive numbers",function(){
    expect(Add(1,2)).toBe(3)
    expect(Add(2,2)).toBe(4)
})

test("addition of two negataive numbers",function(){
    expect(Add(-1,-2)).toBe(-3)
})

test("addition of one postive one negataive number",function(){
    expect(Add(-1,2)).toBe(1)
})