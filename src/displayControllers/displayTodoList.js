export default function displayTodoList(todos, htmlParent) {
  // eslint-disable-next-line no-param-reassign
  htmlParent.innerHTML = '';
  todos.getListOfTodos().forEach((todo) => {
    const element = document.createElement('li');
    element.textContent = todo.getTitle();
    htmlParent.appendChild(element);
  });
}
