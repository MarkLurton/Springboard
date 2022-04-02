// Select the section with an id of container without using querySelector.
let exer1 = document.getElementById('container');
// Select the section with an id of container using querySelector.
let exer2 = document.querySelector('#container');
// Select all of the list items with a class of “second”.
let exer3 = document.querySelectorAll('.second');
// Select a list item with a class of third, but only the list item inside of the ol tag.
let exer4 = document.querySelector('ol .third');
// Give the section with an id of container the text “Hello!”.
exer1.prepend('Hello!');
// Add the class main to the div with a class of footer.
let exer6 = document.querySelector(".footer");
exer6.classList.add('main');
// Remove the class main on the div with a class of footer.
exer6.classList.remove('main');
// Create a new li element.
let newLi = document.createElement('li');
// Give the li the text “four”.
newLi.innerText = 'four';
// Append the li to the ul element
let exer10 = document.querySelector('ul');
exer10.append(newLi);
// Loop over all of the lis inside the ol tag and give them a background color of “green”.
let lis = document.querySelectorAll('ol li');
for (li of lis) {
    li.style.backgroundColor = 'green';
}
// Remove the div with a class of footer
let exer12 = document.querySelector('.footer');
exer12.remove();


