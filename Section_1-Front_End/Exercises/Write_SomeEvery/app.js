function mySome(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) {
            return true;
        }
    }
    return false;
}

function myEvery(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (!func(arr[i], i, arr)) {
            return false;
        }
    }
    return true;
}

arr = [2, 4, 6, 8, 10, 11];

function isEven(num) {
    return num % 2 === 0;
}