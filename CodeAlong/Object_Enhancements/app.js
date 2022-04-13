function makePerson(first, last, age) {
    return {
        first,
        last,
        age,
        isAlive : true
    };
}

// const mathStuff = {
//     x: 200,
//     add: function(a, b) {
//         return a + b;
//     },
//     square: function(a) {
//         return a * a;
//     }
// };

const mathStuff = {
    x: 200,
    add(a, b) {
        return a + b;
    },
    square(a) {
        return a * a;
    }
};

const color = {
    periwinkle : '9c88ff',
    '9c88ff'   : periwinkle
};

function makeColor(name, hex) {
    return {
        [name] : hex,
        [hex]  : name
    };
}