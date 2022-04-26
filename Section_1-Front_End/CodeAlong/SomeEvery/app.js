const words = [
    'immunoelectrophoretically',
    'rotovator',
    'tsktsk',
    'psychophysicotherapeutics',
    'squirrelled',
    'crypt',
    'uncopyrightable',
    'cysts',
    'pseudopseudohypoparathyroidism',
    'unimaginatively'
];

words.some(function(word) {
    return word.length > 25;
})

words.some(function(word) {
    return word.indexOf('thyroid') !== -1;
});

words.every(function(word) {
    return word.length >= 5;
})

function allStrings(arr) {
    return arr.every(function(item) {
        return typeof(item) === 'string';
    })
}

const btn = document.querySelector('button');
btn.addEventListener('click', function(e) {
    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    const allChecked = checkboxes.every(function(checkbox) {
        return checkbox.checked;
    })
    if (!allChecked) {alert('Please agree to all of the terms.')}
})