// const myMap = new Map();
// myMap.set(7, 'seven');
// myMap.set('7','seven string');

// const empty = [];
// myMap.set(empty, 'empty array!');
// myMap.set(true, 'TRUEEEEE!')

const add = (x, y) => x + y;
const mult = (x, y) => x * y;

const funcCalls = new Map();
funcCalls.set(add, 0);
funcCalls.set(mult, 0);

funcCalls.set(add, 1);
funcCalls.set(mult, 9);

const bandData = [
    [3, "3 Doors Down"],
    ['three', 'Three Dog Night'],
    ['nine', 'Nine Inch Nails'],
    ['four', 'The Four Seasons'],
    [41, 'Sum41']
];

const bandMap = new Map(bandData);

bandMap.set(182, 'Blink-182').set(21, 'Twenty One Pilots')

// bandMap.forEach((val, key) => {
//     console.log(`${key} => ${val}`)
// });

for (let [key, value] of bandMap) {
    console.log(key, value)
}

// Sets

const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']);

bannedHashTags.add('bestlife').add('selfie');

function filterHashTags(tags) {
    const bannedHashTags = new Set(['nofilter', 'justsaying', 'winning', 'yolo']);
    return tags.filter((tag) => !bannedHashTags.has(tag));
}

const susansTags = ['happymonday', 'yolo', 'winning', 'sunset'];

const ages = [45,42,21,23,24,98,2,4,4,12,3,12,45];
[...new Set(ages)]