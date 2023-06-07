export default function displayTodoList(todos, htmlParent) {
  todos.getListOfTodos().forEach((todo) => {
    const element = document.createElement('li');
    element.textContent = todo.getTitle();
    htmlParent.appendChild(element);
  });
}
