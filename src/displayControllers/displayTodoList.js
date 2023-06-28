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
    // add title inside container for easy flex placement
    const titleContainer = document.createElement('div');
    titleContainer.classList.add('titleContainer');
    itemAndButtons.appendChild(titleContainer);
    if (todo.getPriority() === 'High') {
      titleContainer.classList.add('highPriority');
    }
    if (todo.getPriority() === 'Medium') {
      titleContainer.classList.add('mediumPriority');
    }
    if (todo.getPriority() === 'Low') {
      titleContainer.classList.add('lowPriority');
    }
    const title = document.createElement('p');
    title.textContent = todo.getTitle();
    title.classList.add('title');
    titleContainer.appendChild(title);
    // add date inside container for easy flex placement
    const dueDateContainer = document.createElement('div');
    dueDateContainer.classList.add('dueDateContainer');
    itemAndButtons.appendChild(dueDateContainer);
    const dueDate = document.createElement('p');
    dueDate.classList.add('dueDate');
    dueDate.textContent = todo.getDueDate();
    dueDateContainer.appendChild(dueDate);
    // add show more button
    const showMoreButton = document.createElement('button');
    showMoreButton.classList.add('showMoreButton')
    showMoreButton.onclick = () => {
      displayDetails(todo, detailsContainer);
    }
    itemAndButtons.appendChild(showMoreButton);
    // add edit button
    const editButton = document.createElement('button');
    editButton.classList.add('editButton')
    editButton.onclick = () => {
      displayAddOrEditForm(todos, htmlParent, detailsContainer, i);
    }
    itemAndButtons.appendChild(editButton);
    // add delete button
    const deleteButton = document.createElement('button');
    deleteButton.classList.add('deleteButton')
    deleteButton.onclick = () => {
      todos.deleteTodo(i);
      displayTodoList(todos, htmlParent);
    }
    itemAndButtons.appendChild(deleteButton);
  }
}
