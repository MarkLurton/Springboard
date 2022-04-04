const form = document.querySelector('form');
const input = document.querySelector('input');
const todos = document.querySelector('ul');
const tasks = JSON.parse(localStorage.getItem("tasks"));

// loop through localStorage creating li and buttons for each task
for (let task in tasks) {

    const storedTask = document.createElement('li');
    const storedDoneBtn = document.createElement('button');
    const storedDeleteBtn = document.createElement('button');

    storedTask.innerText = task;
    storedTask.id = task;

    // check whether or not task has been completed and complete to classList if it has
    if (tasks[task]) {
        storedTask.classList.add('complete');
    }

    // If task has been completed, display "Oops!" to allow user to undo. If not, display "All Done!" to allow user to mark task as complete
    storedDoneBtn.innerText = tasks[task] ? "Oops!" : "All Done!"
    storedDoneBtn.className = 'done';
    storedDeleteBtn.innerText = 'Nevermind!';
    storedDeleteBtn.className = 'delete';

    // Append buttons to stored task
    storedTask.append(storedDoneBtn);
    storedTask.append(storedDeleteBtn);

    // Append stored task to todos
    todos.append(storedTask);
}

// Task Submission Event Listener
form.addEventListener('submit', function(event) {

    event.preventDefault();

    // Check local storage for tasks. If it does not exist, create an empty object.
    let tasks = JSON.parse(localStorage.getItem("tasks")) ? JSON.parse(localStorage.getItem("tasks")) : {};

    // Check if task is already in todo list. If it is, alert user. Other wise add to todo list
    if (tasks.hasOwnProperty(input.value)) {

        alert(`Oops! you already have ${input.value} in your Todo List!`)

    } else {

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

        // Assume that task will not have been completed yet by default and add to tasks object
        tasks[input.value] = false;

        // Set tasks in localStorage as tasks object
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }
    input.value = '';
});

// Delete and Done Button event listener
todos.addEventListener('click', function(event) {

    event.preventDefault();
    let tasks = JSON.parse(localStorage.getItem("tasks"));

    // Done Button
    if (event.target.className === 'done') {

        event.target.parentElement.classList.toggle('complete');
        event.target.innerText = (event.target.parentElement.className === 'complete') ? "Oops!" : 'All Done!';
        tasks[event.target.parentElement.id] = !tasks[event.target.parentElement.id];

    // Delete Button
    } else if (event.target.className === 'delete') {
        
        event.target.parentElement.remove();
        delete tasks[event.target.parentElement.id];
    }
    localStorage.setItem("tasks", JSON.stringify(tasks));
});