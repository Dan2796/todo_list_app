import './style.css';
import todoItem from './components/todoItem';
import displayMainStructure from './displayControllers/displayMainStructure';
import displayAddNewForm from './displayControllers/displayAddNewForm';
import displayTodoList from './displayControllers/displayTodoList';
import displayDetails from './displayControllers/displayDetails';

// attach main structure to the document body and query select needed dom elements
document.body.appendChild(displayMainStructure());
const htmlList = document.querySelector('.htmlList');
const backgroundImageBox = document.querySelector('.backgroundImageBox');
const addNewButton = document.querySelector('.addNewButton')
const formAddTodo = displayAddNewForm();

// attach form and query select all form elements (but not labels)
backgroundImageBox.appendChild(formAddTodo);
const formSubmit = document.querySelector('.formSubmit');
const titleEntry = document.querySelector('.titleEntry');
const projectEntry = document.querySelector('.projectEntry');
const descriptionEntry = document.querySelector('.descriptionEntry');
const dueDateEntry = document.querySelector('.dueDateEntry');
const priorityEntry = document.querySelector('.priorityEntry');

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
  if (titleEntry.value !== '') {
    onNewEntry(allTodos, htmlList);
    formAddTodo.reset();
    formAddTodo.classList.add('hidden');
  }
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
//displayDetails(allTodos.getListOfTodos()[0], detailsBox);