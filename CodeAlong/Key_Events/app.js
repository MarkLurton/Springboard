// document.addEventListener('keypress', function(event) {
//     console.log(event.key);
// })

// document.addEventListener('keyup', function(event) {
//     console.log(event.key);
// })

document.querySelector('input').addEventListener('keydown', function(event) {
    console.log(`KEY DOWN: ${event.key}`);
});