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
   // nicholas and i were in the same breakout room and he helped me refactor
}

function isFive(userInput) {
    if (parseFloat(userInput) === 5) {
        return true
    } else {
        return false
    }
}



