function todoList(todos) {
  const content = document.getElementById('content');
  const list = document.createElement('ul');
  content.appendChild(list);

  todos.forEach( item => {
    let todo = document.createElement('li');
    todo.innerHTML = item.todo;
    list.appendChild(todo);

    todo.addEventListener('click', () => {
      // console.log(e.currentTarget);
      todo.classList.toggle('line-through');
    })
  });
};

const todos = [
  {todo: "wash the dishes"}, 
  {todo: "walk the dog"}, 
  {todo: "learn javascript"}, 
  {todo: "go shopping"}
];

todoList(todos);