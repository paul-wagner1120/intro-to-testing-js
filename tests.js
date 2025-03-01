//variables for testing

let testObject;

// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });

});

describe('sayHello', function() {
    it('should be a defined function', function() {
        expect(typeof sayHello).toBe('function');
    });
    it('should return a string when called', function() {
        expect(typeof sayHello()).toBe("string");
    });
    it('should return the string "Hello, Jane!" when executed', function() {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it('should return the string "Hello, Alex!" when executed', function() {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it('should return the string "Hello, Pat!" when executed', function() {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello('5')).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello([5, 6, 8])).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(function(){})).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(testObject)).toBe("Hello, World!");
    });
    it('should return the string "Hello, World!" when executed', function() {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
});

describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe(`boolean`);
    });
    it('should return a boolean of true when executed', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return a boolean of true when executed', function() {
        expect(isFive("5")).toBe(true);
    });

});

describe('isEven', function() {
    it('should be a defined function', function() {
        expect(typeof isEven).toBe('function');
    });
    it('should return a boolean when called', function() {
        expect(typeof isEven()).toBe(`boolean`);
    });
    it('should return a boolean of true when executed', function() {
        expect(isEven(2)).toBe(true);
    });
    it('should return a boolean of true when executed', function() {
        expect(isEven(-4)).toBe(true);
    });
    it('should return a boolean of false when executed', function() {
        expect(isEven(3)).toBe(false);
    });
    it('should return a boolean of false when executed', function() {
        expect(isEven("banana")).toBe(false);
    });
    it('should return a boolean of true when executed', function() {
        expect(isEven("8")).toBe(true);
    });
    it('should return a boolean of false when executed', function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it('should return a boolean of false when executed', function() {
        expect(isEven(true)).toBe(false);
    });
    it('should return a boolean of false when executed', function() {
        expect(isEven(false)).toBe(false);
    });
    it('should return a boolean of false when executed', function() {
        expect(isEven()).toBe(false);
    });

});

describe('isVowel', function() {
    it('should be a defined function', function () {
        expect(typeof isVowel).toBe('function');
    });
    it('should return a boolean when called', function () {
        expect(typeof isVowel()).toBe(`boolean`);
    });
    it('should return a boolean of true when executed', function () {
        expect(isVowel("a")).toBe(true);
    });
    it('should return a boolean of true when executed', function () {
        expect(isVowel("A")).toBe(true);
    });
    it('should return a boolean of false when executed', function () {
        expect(isVowel("y")).toBe(false);
    });
    it('should return a boolean of false when executed', function () {
        expect(isVowel(4)).toBe(false);
    });
    it('should return a boolean of true when executed', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return a boolean of false when executed', function () {
        expect(isVowel(false)).toBe(false);
    });
    it('should return a boolean of false when executed', function () {
        expect(isVowel("banana")).toBe(false);
    });
    it('should return a boolean of false when executed', function () {
        expect(isVowel()).toBe(false);
    });
});

describe('add', function() {
    it('should be a defined function', function () {
        expect(typeof add).toBe('function');
    });
    it('should return the sum of 2 and 3 when executed', function () {
        expect(add(2,3)).toBe(5);
    });
    it('should return the sum of (-3) and (-9) when executed', function () {
        expect(add(-3, -9)).toBe(-12);
    });
    it('should return the sum of "5" and 6 when executed', function () {
        expect(add("5", 6)).toBe(11);
    });
    it('should return the sum of "-4" and "10" when executed', function () {
        expect(add("-4","10")).toBe(6);
    });
    it('should return NaN', function () {
        expect(add("banana","split")).toBeNaN(true);
    });
    it('should return NaN', function () {
        expect(add(2, "apples")).toBeNaN(true);
    });
    it('should return NaN', function () {
        expect(add()).toBeNaN(true);
    });


});