document.getElementById('newTodo').addEventListener('keyup', function(event) {
    if (event.key === 'Enter') {
        addTodo();
    }
});

function addTodo() {
    var todoText = document.getElementById('newTodo').value;
    var newTodoInput = document.getElementById('newTodo');

    if (todoText === '') {
        newTodoInput.style.border = '2px solid red';
        return;
    }

    var todoList = document.getElementById('todoList');
    var li = document.createElement('li');
    li.className = 'todoItem';

    var span = document.createElement('span');
    span.innerText = todoText;
    span.addEventListener('dblclick', function() {
        editTodo(span);
    });
    
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

function editTodo() {
    var todoText = span.innerText;
    var editText = prompt('Bearbeite die Aufgabe:', todoText);

    if (editText !== null) {
        span.innerText = editText;
    }
}
