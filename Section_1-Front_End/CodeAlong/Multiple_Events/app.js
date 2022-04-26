// const removeButtons = document.querySelectorAll('li button');
// const form = document.querySelector('#add-friend');
// const input = document.querySelector('#first-name');
// const friendList = document.querySelector('#friend-list')

// for (let btn of removeButtons) {
//     btn.addEventListener('click', function(event) {
//         event.target.parentNode.remove();
//     });
// };


// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//     const newFriend = document.createElement('li');
//     const removeBtn = document.createElement('button');
//     newFriend.innerText = `${input.value} `;
//     removeBtn.innerText  = 'UnFriend';
//     newFriend.appendChild(removeBtn);
//     input.value = '';
//     friendList.appendChild(newFriend);
//     removeBtn.addEventListener('click', function(event) {
//         event.target.parentNode.remove();
//     });
// });

const form = document.querySelector('#add-friend');
const input = document.querySelector('#first-name');
const friendList = document.querySelector('#friend-list')

friendList.addEventListener('click', function(event) {
    if ( event.target.tagName === "BUTTON" ) {
        event.target.parentNode.remove();
    } else if (event.target.tagName === "LI") {
        event.target.classList.add('best-friend');
        const heart = document.createElement('span');
        heart.innerHTML = '&hearts;';
        event.target.prepend(heart);
    }
})

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const newFriend = document.createElement('li');
    const removeBtn = document.createElement('button');
    newFriend.innerText = `${input.value} `;
    removeBtn.innerText  = 'UnFriend';
    newFriend.appendChild(removeBtn);
    input.value = '';
    friendList.appendChild(newFriend);
});
