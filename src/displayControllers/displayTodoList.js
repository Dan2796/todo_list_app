import displayDetails from './displayDetails';
import displayAddOrEditForm from './displayAddOrEditForm';

export default function displayTodoList(todos, htmlParent, detailsContainer) {
  // eslint-disable-next-line no-param-reassign
  htmlParent.innerHTML = '';
  // basic for loop so can use the index to allow for show more / delete / edit  
  for (let i = 0; i < todos.getListOfTodos().length; i += 1) {
    const todo = todos.getListOfTodos()[i];
    const itemAndButtons = document.createElement('div');
    itemAndButtons.classList.add('itemAndButtons');
    htmlParent.appendChild(itemAndButtons);
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
    itemAndButtons.appendChild(element);
    // add show more button
    const showMoreButton = document.createElement('button');
    showMoreButton.textContent = '≡️';
    element.classList.add('showMoreButton')
    showMoreButton.onclick = () => {
      displayDetails(todo, detailsContainer);
    }
    itemAndButtons.appendChild(showMoreButton);
    // add edit button
    const editButton = document.createElement('button');
    editButton.textContent = '✐';
    element.classList.add('editButton')
    editButton.onclick = () => {
      displayAddOrEditForm(todos, htmlParent, detailsContainer, i);
    }
    itemAndButtons.appendChild(editButton);
    // add delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = '🗑️';
    element.classList.add('deleteButton')
    deleteButton.onclick = () => {
      todos.deleteTodo(i);
      displayTodoList(todos, htmlParent);
    }
    itemAndButtons.appendChild(deleteButton);
  }
}
