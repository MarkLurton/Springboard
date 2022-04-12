function myForEach(arr, func) {
    i = 0;
    while (i < arr.length) {
        func(arr[i]);
        i += 1;
    }

}

function sum(num) {
    total += num;
}

function multiply(num) {
    product *= num;
}

let total = 0;
let product = 1;

myForEach([1, 2, 3, 4], sum);
myForEach([1, 2, 3, 4], multiply);