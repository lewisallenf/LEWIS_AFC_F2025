//describe("", callback())=>{"SET OF TESTS});
// test("", ()=>{
//    expect(add()).toBe(12)};
// Calling the functions: const{func, func2....} = require(locations "./")
const{isPalindrome} = require("./isPalindrome")

//Functionality
//Does it exist//
//Correct parameters = arity = 1
describe("Functionality = API Contract", ()=>{
    test("Does the isPalindrome function exist", ()=>{
        expect(typeof isPalindrome).toBe("function")
    })
    test("Does the isPalindrome accept 1 argument", ()=>{
        expect(isPalindrome.length).toBe(1)
    })
//Datatypes
//Is it the correct Data type: String only
//[undefined, null, true, "32", number, [], {}, NaN, Infinity, -Infinity]
    test("If All Data types but a string returns false",()=>{
        expect(isPalindrome(undefined)).toBe(false);
        expect(isPalindrome(null)).toBe(false);
        expect(isPalindrome(true)).toBe(false);
        expect(isPalindrome("")).toBe(true);
        expect(isPalindrome([])).toBe(false);
        expect(isPalindrome({})).toBe(false);
        expect(isPalindrome(NaN)).toBe(false);
        expect(isPalindrome(Infinity)).toBe(false);
        expect(isPalindrome(-Infinity)).toBe(false);

    })
    test("Should return true for basic palindrones", ()=>{
        expect(isPalindrome("bob")).toBe(true);
        expect(isPalindrome("racecar")).toBe(true);
        expect(isPalindrome("apple")).toBe(false);
    })
})

//PERCISION!!!!!How Deep do we want to into the results
// Non case sensitive
//Palendrome returns true, non pallendrome returns false
//Phrases should work
//solution removes spaces, puncuations and ingnore letter case before checking
describe("Outlier Handling", ()=>{
    test("Should return true for non case sensitive", ()=>{
        expect(isPalindrome('Racecar')).toBe(true);
    })
    test("Should return true for No spacing", ()=>{
        expect(isPalindrome("Madam I'm Adam.")).toBe(true)
    })
})