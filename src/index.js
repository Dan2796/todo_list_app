import './style.css';
import todoItem from './components/todoItem';
import displayTodoList from './displayControllers/displayTodoList';
import displayDetails from './displayControllers/displayDetails';

// basic structure for page:
const container = document.createElement('div');
document.body.appendChild(container);
const title = document.createElement('h1');
container.appendChild(title);
title.textContent = 'To-do List';
const detailsBox = document.createElement('div');
container.appendChild(detailsBox);
const todoBox = document.createElement('div');
container.appendChild(todoBox);
const addNewButton = document.createElement('button');
addNewButton.textContent = 'Add new';
todoBox.appendChild(addNewButton);
const htmlList = document.createElement('ol');
todoBox.appendChild(htmlList);

// form for adding new tasks:
const formAddTodo = document.createElement('form');
container.appendChild(formAddTodo);
// start hidden
formAddTodo.classList.add('hidden');
const titleLabel = document.createElement('label');
titleLabel.textContent = 'Task:';
formAddTodo.appendChild(titleLabel);
const titleEntry = document.createElement('input');
titleEntry.setAttribute('type', 'text');
formAddTodo.appendChild(titleEntry);
const projectLabel = document.createElement('label');
projectLabel.textContent = 'Project:';
formAddTodo.appendChild(projectLabel);
const projectEntry = document.createElement('input');
projectEntry.setAttribute('type', 'text');
formAddTodo.appendChild(projectEntry);
const descriptionLabel = document.createElement('label');
descriptionLabel.textContent = 'Description:';
formAddTodo.appendChild(descriptionLabel);
const descriptionEntry = document.createElement('input');
descriptionEntry.setAttribute('type', 'text');
formAddTodo.appendChild(descriptionEntry);
const dueDateLabel = document.createElement('label');
dueDateLabel.textContent = 'Due:';
formAddTodo.appendChild(dueDateLabel);
const dueDateEntry = document.createElement('input');
dueDateEntry.setAttribute('type', 'text');
formAddTodo.appendChild(dueDateEntry);
const priorityLabel = document.createElement('label');
priorityLabel.textContent = 'Priority:';
formAddTodo.appendChild(priorityLabel);
const priorityEntry = document.createElement('input');
priorityEntry.setAttribute('type', 'text');
formAddTodo.appendChild(priorityEntry);
const formSubmit = document.createElement('button');
formSubmit.setAttribute('type', 'submit');
formSubmit.textContent = 'Add task';
formAddTodo.appendChild(formSubmit);

// can immediately invoke because only need one todo list
const allTodos = (() => {
  const listOfTodos = [];
  const getListOfTodos = () => listOfTodos;
  const projects = [];
  const getProjects = () => projects;
  const addTodo = (newTodo) => {
    listOfTodos.push(newTodo);
    if (!projects.includes(newTodo.getProject())) {
      projects.push(newTodo.getProject());
    }
  };
  return { getListOfTodos, getProjects, addTodo };
})();

function onNewEntry(todoList, htmlParent) {
  todoList.addTodo(todoItem({
    title: titleEntry.value,
    project: projectEntry.value,
    description: descriptionEntry.value,
    dueDate: dueDateEntry.value,
    priority: priorityEntry.value,
  }));
  displayTodoList(todoList, htmlParent);
}

formSubmit.addEventListener('click', (e) => {
  e.preventDefault();
  onNewEntry(allTodos, htmlList);
  formAddTodo.reset();
  formAddTodo.classList.add('hidden');
});

addNewButton.addEventListener('click', () => {
  formAddTodo.classList.remove('hidden');
  titleEntry.focus();
});
// provide user with two examples
allTodos.addTodo(todoItem({
  title: 'Merge sales and marketing',
  project: 'Project Zeus',
  description: 'You will not be informed of the meaning of Project Zeus until the time is right for you to know the meaning of Project Zeus',
  dueDate: 'Kettering conference',
  priority: 'High',
}));
allTodos.addTodo(todoItem({
  title: 'Go for a lunchtime pint',
  project: 'Swindon merge',
  description: 'Make sure the best people show up',
  dueDate: 'This lunchtime',
  priorty: 'Medium',
}));

displayTodoList(allTodos, htmlList);
displayDetails(allTodos.getListOfTodos()[0], detailsBox);
