const form = document.querySelector('form');
const input = document.querySelector('input');
const todos = document.querySelector('ul');
const tasks = JSON.parse(localStorage.getItem("tasks"));

for (let task in tasks) {
    const storedTask = document.createElement('li');
    const storedDoneBtn = document.createElement('button');
    const storedDeleteBtn = document.createElement('button');

    storedTask.innerText = task;
    storedTask.id = task;
    if (tasks[task]) {
        storedTask.classList.add('complete');
    }
    storedDoneBtn.innerText = tasks[task] ? "Oops!" : "All Done!"
    storedDoneBtn.className = 'done';
    storedDeleteBtn.innerText = 'Nevermind!';
    storedDeleteBtn.className = 'delete';

    storedTask.append(storedDoneBtn);
    storedTask.append(storedDeleteBtn);

    todos.append(storedTask);
}

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const newTask = document.createElement('li');
    const doneBtn = document.createElement('button');
    const deleteBtn = document.createElement('button');

    newTask.innerText = input.value;
    newTask.id = input.value;
    doneBtn.innerText = 'All Done!';
    doneBtn.className = 'done';
    deleteBtn.innerText = 'Nevermind!';
    deleteBtn.className = 'delete';

    newTask.append(doneBtn);
    newTask.append(deleteBtn);

    todos.append(newTask);

    let tasks = JSON.parse(localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : {};
    tasks[input.value] = false;
    localStorage.setItem("tasks", JSON.stringify(tasks));

    input.value = '';
});

todos.addEventListener('click', function(event) {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    if (event.target.className === 'done') {
        event.target.parentElement.classList.toggle('complete');
        event.target.innerText = (event.target.parentElement.className === 'complete') ? "Oops!" : 'All Done!';
        tasks[event.target.parentElement.id] = !tasks[event.target.parentElement.id];
    } else if (event.target.className === 'delete') {
        event.target.parentElement.remove();
        delete tasks[event.target.parentElement.id];
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
    console.log(localStorage);
});