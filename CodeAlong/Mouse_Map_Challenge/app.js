const body = document.querySelector('body');
body.style.backgroundColor = 'red';

document.addEventListener('pointermove', function(event){
    let red = ( event.clientX / window.innerWidth ) * 255;
    let green = 0;
    let blue = ( event.clientY / window.innerHeight ) * 255;
    body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    console.log(body.style.backgroundColor);
})
