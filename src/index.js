document.getElementById('newTodo').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    var todoText = document.getElementById('newTodo').value;
    var newTodoInput = document.getElementById('newTodo');
    var prioritySelector = document.getElementById('prioritySelector');

    if (todoText === '') {
        newTodoInput.style.border = '2px solid red';
        return;
    }

    var todoList = document.getElementById('todoList');
    var li = document.createElement('li');
    var priorityClass = prioritySelector.value;

    li.className = 'todoItem ' + priorityClass;

    var span = document.createElement('span');
    span.innerHTML = `${todoText} (<span style="color: ${getTextColorForPriority(priorityClass)}">${getPriorityText(priorityClass)}</span>)`;

    var editInput = document.createElement('input');
    editInput.type = 'text';
    editInput.style.display = 'none';

    var completeButton = document.createElement('button');
    completeButton.innerText = 'Abgeschlossen';
    completeButton.onclick = function() {
        setStatus(li, 'abgeschlossen');
    };

    var inProgressButton = document.createElement('button');
    inProgressButton.innerText = 'In Arbeit';
    inProgressButton.onclick = function() {
        setStatus(li, 'inArbeit');
    };

    var deleteButton = document.createElement('button');
    deleteButton.innerText = 'Löschen';
    deleteButton.onclick = function() {
        todoList.removeChild(li);
    };

    li.appendChild(span);
    li.appendChild(completeButton);
    li.appendChild(inProgressButton);
    li.appendChild(deleteButton);
    todoList.appendChild(li);

    newTodoInput.value = '';
    newTodoInput.style.border = '';
}

function setStatus(element, status) {
    element.classList.remove('abgeschlossen', 'inArbeit');
    element.classList.add(status);
}


function clearTodo() {
    var todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
}

const darkModeToggle = document.getElementById('darkModeToggle');
updateDarkMode(darkModeToggle.checked);

darkModeToggle.addEventListener('change', function() {
    updateDarkMode(this.checked);
});

function updateDarkMode(isDarkMode) {
    document.body.classList.toggle('dark-mode', isDarkMode);

    const h1Element = document.querySelector('h1');
    h1Element.style.color = isDarkMode ? '#fff' : '#333';

    const todoList = document.getElementById('todoList');
    todoList.style.color = isDarkMode ? '#fff' : '#333';

    document.body.style.backgroundColor = isDarkMode ? '#333' : '#fff';
}

function getPriorityText(priority) {
    switch (priority) {
        case 'low':
            return 'Niedrig';
        case 'medium':
            return 'Mittel';
        case 'high':
                return 'Hoch';
        default:
                return '';
    }
}

function getTextColorForPriority(priority) {
    switch (priority) {
        case 'low':
            return 'green';
        case 'medium':
            return 'orange';
         case 'high':
                return 'red';
        default:
                return 'black';
    }
}
