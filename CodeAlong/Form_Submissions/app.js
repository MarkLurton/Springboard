const form = document.querySelector('#monkeyform');
const monkey = document.querySelector('input');

form.addEventListener('submit', function(event) {
    event.preventDefault();
    if (monkey.value) {
        alert(`You have chosen the monkey: ${monkey.value}!`)
    } else {
        alert("Hey! You didn't choose a monkey!")
    }
});

document.querySelector('a').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('NO GOOGLE FOR YOU!')
});

document.querySelector('input[type="checkbox"]').addEventListener('click', function(event) {
    event.preventDefault();
    console.log('NO CHECKING THAT BOX, GUYYY!')
})