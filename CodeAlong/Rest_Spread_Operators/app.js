// Arguments object
// function max() {
//     console.log(arguments);
// };

function sum() {
    if (!arguments.length) return undefined;
    const args = Array.from(arguments);
    return args.reduce((sum, val) => sum + val);
}


const max = function() {
    if (!arguments.length) return undefined;
    const args = Array.from(arguments);
    return args.reduce((max, currVal) => (currVal > max ? currVal : max));
};

// Rest Operator

function sum2(...nums) {
    if (!nums.length) return undefined;
    return nums.reduce((sum, n) => sum + n);
};

const sum3 = (...values) => {
    if (!values.length) return undefined;
    return values.reduce((sum, n) => sum + n);
};

function makeFamily(parent1, parent2, ...kids) {
    return {
        parents : [parent1, parent2],
        children : kids.length ? kids : 'No kids'
    }
}

const filterByType = (type, ...vals) => {
    return vals.filter((val) => typeof(val) === type)
};

// Spread Operator

const nums = [4, 5, 88, 123, 92, 34];

console.log(Math.max(...nums));

const filterArray = ['string', 1, 2, 3, 4, '5', '6', 'hello', true];

console.log(filterByType(...filterArray));

const palette = ['lavender berry', 'sunflower yellow', 'orchid orange'];

// const paletteCopy = palette.slice();
const paletteCopy = [...palette, 'grass green'];

const tea = {
    type   : 'oolong',
    name   : 'winter sprout',
    origin : 'taiwan'
};

const teaData = {
    steepTime : '30s',
    brewTemp  : 175
}

const teaTin = { ...tea, price: 22.99 };

const newTea = { ...tea, name: 'golden frost'};

const fullTea = { ...tea, ...teaData };

const shoppingCart = [
    {
        name     : 'honey orchid',
        quantity : 2,
        price    : 13.5
    },
    {
        name     : 'african solstice',
        quantity : 4,
        price    : 25.99
    }
];
// shallow clone keeps references
const cartCopy = [...shoppingCart]