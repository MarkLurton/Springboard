// const add = function(x, y) {
//     return x + y;
// };

const add = (x,y) => {
    return x + y;
};

// [2, 3, 6, 78, 99, 104, 23].reduce(function(max, currNum) {
//     return Math.max(max, currNum);
// });

[2, 3, 6, 78, 99, 104, 23].reduce((max, currNum) => {
    return Math.max(max, currNum);
});

// **************************
// ARROW FUNCTION SHORTCUTS
// **************************

// [1, 2, 3, 4, 5].forEach(n => {
//     console.log(n * 10)
// });

// const greet = () => {
//     console.log('HELLO!!!')
// }

[1, 2, 3, 4, 5, 6].filter((num) => num % 2 === 0)

const double = (n) => n * 2;

[1, 5, 7, 9, 10, 12, 13, 15].map((n) => {
    if (n % 2 === 0) {
        return 'even';
    }
    return 'odd';
});

[1, 5, 7, 9, 10, 12, 13, 15].map((n) => (n % 2 === 0 ? 'even' : 'odd'));

const dailyRainTotals = [ [1.2, 0.35, 2.2], [1.7, 0.6, 0.1], [2.5, 0.9, 1.5] ];
// dailyRainTotals.map((hourlyRainTotals) => {
//     return hourlyRainTotals.reduce((sum, inchesOfRain) => {
//         return sum + inchesOfRain
//     });
// });

dailyRainTotals.map((hourlyRainTotals) => (
    hourlyRainTotals.reduce((sum, inchesOfRain) => sum + inchesOfRain))
);

// **************************
// ARROW FUNCTION GOTCHAS
// **************************

const makeMath = (num) => (
    {
        square : num ** 2,
        double : num * 2
    }
);

const cat = {
    name : 'Bubs',
    eat: function() {
        console.log(this);
        return `${this.name} chows down!`;
    },
    meow : () => {
        console.log(this);
        return `${this.name} says MEOW!!!`;
    }
};