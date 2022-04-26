function holler() {
    console.log('HEY YOU!');
}

const whisper = function() {
    console.log('pssst! I have a secret!')
}

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x - y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

const mathFuncs = [add, subtract, multiply, divide];

function doMath(a, b, func) {
   return func(a, b);
}

doMath(3, 4, function(a, b) {console.log( a ** b )});

function doAllMathFuncs(x, y, arr) {
    results = [];
    for (let func of arr) {
        results.push(func(x, y));
    }
    return results;
}