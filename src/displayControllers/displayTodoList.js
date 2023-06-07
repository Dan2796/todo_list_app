export default function displayTodoList(todos, htmlParent) {
  // eslint-disable-next-line no-param-reassign
  htmlParent.innerHTML = '';
  todos.getListOfTodos().forEach((todo) => {
    const element = document.createElement('div');
    element.textContent = todo.getTitle();
    element.classList.add('todoItem');
    if (todo.getPriority() === 'High') {
      element.classList.add('highPriority');
    }
    if (todo.getPriority() === 'Medium') {
      element.classList.add('mediumPriority');
    }
    if (todo.getPriority() === 'Low') {
      element.classList.add('lowPriority');
    }
    htmlParent.appendChild(element);
  });
}
