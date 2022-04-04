const colorsSection = document.querySelector('#colors');

colorsSection.addEventListener('click', function(event) {
    if (event.target.tagName === "BUTTON") {
        document.body.style.backgroundColor = event.target.dataset.hex;
    }
})