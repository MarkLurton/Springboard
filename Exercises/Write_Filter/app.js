function myFilter(arr, func) {
    const newArr = [];
    let i = 0;
    while (i < arr.length) {
        if (func(arr[i], i, arr)) {
            newArr.push(arr[i]);
        }
        i += 1;
    }
    return newArr;
};

function isEven(num) {
    if (num % 2 === 0) {
        return true;
    } else {
        return false;
    }
};

function isEvenIndex(val, i) {
    if (i % 2 === 0) {
        return true;
    } else {
        return false;
    }
}