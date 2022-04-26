const toggleSwitch = document.querySelector('#switch');

if(localStorage.getItem('darkModeEnabled')) {
    document.body.className = 'dark';
    toggleSwitch.checked = true;
}

toggleSwitch.addEventListener('click', function() {
    const { checked } = toggleSwitch;
    if (checked) {
        localStorage.setItem('darkModeEnabled', true);
    } else {
        localStorage.removeItem('darkModeEnabled');
    }
    document.body.className = checked ? 'dark' : '';
    
})