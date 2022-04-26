const nums = [20, 30, 50, 12, -2, 45, 99, 19, 22, 85];

function mySum(arr) {
    let total = 0;
    for (let num of arr) {
        total += num;
    }
    return total;
}

function myMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++){
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}

const str = 'lollapalooza';
const charFreq = {};
for (let char of str) {
    if (charFreq[char]) {
        charFreq[char] += 1;
    } else {
        charFreq[char] = 1;
    }
}

const words = ['hello', 'I', 'love', 'you'];

words.reduce(function(acc, nextWord) {
    return acc + ' ' + nextWord;
});

const midtermScores = [70, 88, 93, 94, 64, 62, 56];
const finalScores = [92, 93, 76, 77, 78, 59, 61];

const minMidScore = midtermScores.reduce(function(min, nextScore) {
    return nextScore < min ? nextScore : min;
})

const maxMidScore = midtermScores.reduce(function(max, nextScore) {
    return nextScore > max ? nextScore : max;
})

const minYearScore = finalScores.reduce(function(min, nextScore) {
    return nextScore < min ? nextScore : min;
}, minMidScore);

const maxYearScore = finalScores.reduce(function(max, nextScore) {
    return nextScore > max ? nextScore : max;
}, maxMidScore);