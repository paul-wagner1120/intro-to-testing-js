// helloWorld function 
function helloWorld() {
    return "Hello, World!";
}

function sayHello(input) {
    if (!isNaN(parseFloat(input)) || input === "") {
        return "Hello, World!";
    } else if (typeof input === "string") {
        return "Hello, " + input + "!";
    } else {
        return "Hello, World!";
    }
   // nicholas and I were in the same breakout room, and he helped me refactor
}

function isFive(userInput) {
    return parseFloat(userInput) === 5
}

function isEven(testInput) {
     return parseFloat(testInput) % 2 === 0;
}

function isVowel(x) {
    switch (x) {
        case "a":
            return true;
        case "A":
            return true;
        default:
            return false;
    }
}



function add(a,b) {
    if(isNaN(a) || isNaN(b)){
        return NaN
    } else {
        return parseFloat(a) + parseFloat(b);
    }
}

