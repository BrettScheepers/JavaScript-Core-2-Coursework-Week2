function populateTodoList(todos) {
  let list = document.getElementById("todo-list");
  
  todos.forEach( item => {
    let todo = document.createElement('li');
    todo.className += 'list-group-item d-flex justify-content-between align-items-center';
    todo.innerHTML = `${item.task}
                      <span class="badge bg-primary rounded-pill">
                          <i class="fa fa-check" aria-hidden="true"></i>
                          <i class="fa fa-trash" aria-hidden="true"></i>
                      </span>`
    list.appendChild(todo);
  })

  const checkBtns = document.querySelectorAll('.fa-check');
  const trashBtns = document.querySelectorAll('.fa-trash');

  checkBtns.forEach( item => {
    item.addEventListener('click', (e) => {
      e.currentTarget.parentElement.parentElement.classList.toggle('line-through');
    })
  })

  trashBtns.forEach( item => {
    item.addEventListener('click', (e) => {
      e.currentTarget.parentElement.parentElement.remove();
    })
  })
}

// These are the same todos that currently display in the HTML
// You will want to remove the ones in the current HTML after you have created them using JavaScript
let todos = [
  { task: "Wash the dishes", completed: false },
  { task: "Do the shopping", completed: false },
];

populateTodoList(todos);

// This function will take the value of the input field and add it as a new todo to the bottom of the todo list. These new todos will need the completed and delete buttons adding like normal.
function addNewTodo(event) {
  // The code below prevents the page from refreshing when we click the 'Add Todo' button.
  event.preventDefault();
  
  let list = document.getElementById("todo-list");
  let todoValue = document.getElementById('todoInput');
  let todo = document.createElement('li');
    todo.className += 'list-group-item d-flex justify-content-between align-items-center';
    todo.innerHTML = `${todoValue.value}
                      <span class="badge bg-primary rounded-pill">
                          <i class="fa fa-check" aria-hidden="true"></i>
                          <i class="fa fa-trash" aria-hidden="true"></i>
                      </span>`
  
  let checkBtn = todo.querySelector('.fa-check');
  let trashBtn = todo.querySelector('.fa-trash');

  checkBtn.addEventListener('click', (e) => {
    e.currentTarget.parentElement.parentElement.classList.toggle('line-through');
  })

  trashBtn.addEventListener('click', (e) => {
    e.currentTarget.parentElement.parentElement.remove();
  })
  
  list.appendChild(todo);
  todoValue.value = '';
}

// Advanced challenge: Write a fucntion that checks the todos in the todo list and deletes the completed ones (we can check which ones are completed by seeing if they have the line-through styling applied or not).
function deleteAllCompletedTodos(e) {
  e.preventDefault();

  let allTodos = document.querySelectorAll('.list-group-item, .d-flex, .justify-content-between, .align-items-center');
  // console.log(allTodos);

  allTodos.forEach( item => {
    if (item.classList.contains('line-through')) item.remove();
  })
}
