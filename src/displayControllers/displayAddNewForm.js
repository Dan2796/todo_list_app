import todoItem from './../components/todoItem';
import displayTodoList from './displayTodoList';

export default function displayAddNewForm(todoList, htmlTodoList, formContainer) {

  const formBox = document.createElement('form');
  formContainer.appendChild(formBox);
  formBox.classList.add('formBox');
  
  const header = document.createElement('div');
  header.classList.add('detailsBoxHeader');
  formBox.appendChild(header);

  const titleElement = document.createElement('h3');
  titleElement.textContent = 'Add new to-do:';
  header.appendChild(titleElement);

  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.onclick = () => formContainer.removeChild(formBox);
  closeButton.classList.add('closeButton');
  header.appendChild(closeButton);

  const formAddTodo = document.createElement('form');
  formBox.appendChild(formAddTodo);
  formAddTodo.classList.add('addNewForm');

  const titleLabel = document.createElement('label');
  titleLabel.textContent = 'Task:';
  formAddTodo.appendChild(titleLabel);

  const titleEntry = document.createElement('input');
  titleEntry.setAttribute('type', 'text');
  titleEntry.setAttribute('required', 'required');
  titleEntry.classList.add('titleEntry');
  formAddTodo.appendChild(titleEntry);

  const projectLabel = document.createElement('label');
  projectLabel.textContent = 'Project:';
  formAddTodo.appendChild(projectLabel);

  const projectEntry = document.createElement('input');
  projectEntry.setAttribute('type', 'text');
  titleEntry.classList.add('projectEntry');
  formAddTodo.appendChild(projectEntry);

  const descriptionLabel = document.createElement('label');
  descriptionLabel.textContent = 'Description:';
  formAddTodo.appendChild(descriptionLabel);

  const descriptionEntry = document.createElement('input');
  descriptionEntry.setAttribute('type', 'text');
  titleEntry.classList.add('descriptionEntry');
  formAddTodo.appendChild(descriptionEntry);

  const dueDateLabel = document.createElement('label');
  dueDateLabel.textContent = 'Due:';
  formAddTodo.appendChild(dueDateLabel);

  const dueDateEntry = document.createElement('input');
  dueDateEntry.setAttribute('type', 'text');
  titleEntry.classList.add('dueDateEntry');
  formAddTodo.appendChild(dueDateEntry);

  const priorityLabel = document.createElement('label');
  priorityLabel.textContent = 'Priority:';
  formAddTodo.appendChild(priorityLabel);

  const priorityEntry = document.createElement('input');
  priorityEntry.setAttribute('type', 'text');
  titleEntry.classList.add('priorityEntry');
  formAddTodo.appendChild(priorityEntry);

  const formSubmit = document.createElement('button');
  formSubmit.setAttribute('type', 'submit');
  formSubmit.textContent = 'Add task';
  formSubmit.classList.add('formSubmit');
  formAddTodo.appendChild(formSubmit);

  titleEntry.focus();

  formSubmit.addEventListener('click', (e) => {
    e.preventDefault();
    if (titleEntry.value == '') {
      return;
    }
    todoList.addTodo(todoItem({
      title: titleEntry.value,
      project: projectEntry.value,
      description: descriptionEntry.value,
      dueDate: dueDateEntry.value,
      priority: priorityEntry.value,
    }));
    formContainer.removeChild(formBox);
    displayTodoList(todoList, htmlTodoList, formContainer);
  });
}
