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

const longWords = words.filter(function(word) {
    return (word.length >=20)
});

const noVowels = words.filter(function(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let vowel of vowels) {
        if (word.includes(vowel)) {
            return false;
        }
    }
    return true;
});

const containsVowels = words.filter(function(word) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    for (let vowel of vowels) {
        if (word.includes(vowel)) {
            return true;
        }
    }
    return false;
});

function extractCompletedTasks() {
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');

    const allCheckboxesArray = Array.from(allCheckboxes);

    const checked = Array.from(allCheckboxesArray).filter(function(box) {
        return box.checked;
    })

    const completedTasks = checked.map(function(checkbox) {
        return checkbox.parentElement.innerText;
    })
    return completedTasks;
}