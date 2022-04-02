const newTodo = document.createElement('Li');
const secondTodo = document.createElement('li');
const thirdTodo = document.createElement('li');
const newImg = document.createElement('img');
const boldText = document.createElement('b');
const ul = document.querySelector('ul');

boldText.textContent = "DON'T FORGET TO LOCK THE COOP!";
secondTodo.textContent = "Order more la croix";
thirdTodo.textContent = "Feed Cats";
newImg.setAttribute('src', 'https://images.unsplash.com/photo-1518020382113-a7e8fc38eac9?ixlib=rb-1.2.1&auto=format&fit=crop&w=1320&q=80');

newTodo.classList.add('todo');
secondTodo.classList.add('todo');
thirdTodo.classList.add('todo');
newImg.classList.add('thumbnail');

newTodo.append(boldText);
ul.append(newTodo, secondTodo);
ul.prepend(thirdTodo);

document.body.prepend(newImg);