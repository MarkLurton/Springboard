const numbers = [21, 37, 64, 99, 142];

console.log(numbers.map(function(num) {
    return num * -1;
}))

const todos = [
    {
        id: 1,
        text: 'walk the dog',
        priority: 'high'
    },
    {
        id: 2,
        text: 'walk the chickens',
        priority: 'medium'
    },
    {
        id: 3,
        text: 'feed the cats',
        priority: 'low'
    },
    {
        id: 4,
        text: 'put out the fire in my garage',
        priority: 'very high'
    }
];

const todoText = todos.map(function(todo) {
    return todo.text;
});

const links = Array.from(document.querySelectorAll('a'));
const urls = links.map(function(a) {
    return a.href;
})


