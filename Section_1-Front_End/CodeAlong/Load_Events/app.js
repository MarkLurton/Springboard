document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Content Loaded!')
    const btn = document.querySelector('button');

    btn.addEventListener('click', function() {
        console.log('Clicked!')
    });
});

window.addEventListener('load', function() {
    console.log('FULLY LOADED');
});