function myMap(arr, func) {
    let i = 0;
    let newArr = [];
    while (i < arr.length) {
        newArr.push(func(arr[i], i, arr))
        i += 1;
    }
    return newArr;
};

const arr = [1,2,3,4,5];

let squares = myMap(arr, function(val, i, arr) {
    return val ** 2;
})

words = ['blob', 'challenge', 'silly', 'extreme', 'oof'];

let reverse = myMap(words, function(val, i, arr) {
    let split = val.split("");
    let revArr = split.reverse();
    var revWord = revArr.join("")
    return revWord;
})

const repeatedStrings = myMap(['a','b','c','d','e'], function(val, i, arr) {
    return val.repeat(i);
})