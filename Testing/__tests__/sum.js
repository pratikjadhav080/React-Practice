//test suit - collection of tests
//tests..

const {Sum,Sub} = require("../index")

describe("Addition", function () {

    test("addition of two positive numbers", function () {
        expect(Sum(1, 2)).toBe(3)
        expect(Sum(2, 2)).toBe(4)
    })

    test("addition of two negataive numbers", function () {
        expect(Sum(-1, -2)).toBe(-3)
    })

    test("addition of one postive one negative number", function () {
        expect(Sum(-1, 2)).toBe(1)
    })

});

describe("Substraction", function () {

    test("Substraction of two positive numbers", function () {
        expect(Sub(1, 2)).toBe(-1)
        expect(Sub(2, 2)).toBe(0)
    })

    test("Substraction of two negataive numbers", function () {
        expect(Sub(-1, -2)).toBe(1)
    })

    test("Substraction of one postive one negative number", function () {
        expect(Sub(-1, 2)).toBe(-3)
    })

});
