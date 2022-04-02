function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`
}
const letters = document.querySelectorAll('.letter');

for (let letter of letters ) {
    letter.style.color = randomRGB();
}
setInterval(function() {
    for (let letter of letters ) {
        letter.style.color = randomRGB();
    }
}, 1000)