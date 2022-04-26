const scores = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    55,
    59,
    69,
    73,
    73,
    75,
    79,
    83,
    88,
    91,
    93
];

scores.find(function(score) {
    return score > 75;
});

scores.find(function(score) {
    return score !== 0 && score % 2 === 0;
});

const evenScores = scores.filter(function(score) {
    return score % 2 === 0;
});

const firstEven = scores.findIndex(function(score) {
    return score !== 0 && score % 2 === 0;
});

function partition(arr, pivot) {
    const pivotIdx = arr.findIndex(function(item) {
        return item > pivot;
    });
    const left = arr.slice(0, pivotIdx);
    const right = arr.slice(pivotIdx);
    return [left, right];
}

function myFind(arr, func) {
    for (let i = 0; i < arr.length; i++) {
        if (func(arr[i], i, arr)) return arr[i];
    }
}

function myFindIndex(arr, func) {
    for (let i = 0; i < arr.length; i ++) {
        if (func(arr[i], i, arr)) return i;
    }
    return -1;
}
