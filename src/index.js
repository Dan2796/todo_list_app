import './style.css';
import todoItem from './components/todoItem';
import displayAddOrEditForm from './displayControllers/displayAddOrEditForm';
import displayTodoList from './displayControllers/displayTodoList';

// create main structure in the DOM
const backgroundImageBox = document.createElement('div');
backgroundImageBox.classList.add('backgroundImageBox');
document.body.appendChild(backgroundImageBox);

const todoBox = document.createElement('div');
todoBox.classList.add('todoBox');
backgroundImageBox.appendChild(todoBox);

const todoHeader = document.createElement('div');
todoHeader.classList.add('todoHeader');
todoBox.append(todoHeader);

const todoTitle = document.createElement('div');
todoTitle.classList.add('todoTitle');
todoTitle.textContent = 'Tasks';
todoHeader.append(todoTitle);

const addNewButton = document.createElement('button');
addNewButton.classList.add('addNewButton');
addNewButton.textContent = 'Add new';
todoHeader.appendChild(addNewButton);

const htmlList = document.createElement('div');
htmlList.classList.add('htmlList');
todoBox.appendChild(htmlList);

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
  const deleteTodo = (index) => listOfTodos.splice(index, 1);
  return { getListOfTodos, getProjects, addTodo, deleteTodo };
})();

addNewButton.addEventListener('click', () => {
  /* display add new form includes the code to add the new item to the 
     todolist supplied. Easier to do it this way since otherwise you have to 
     query-selector all the fields created by the add new form, as well as the 
     button. Ultimately it's just using a function that already exists so 
     still counts as separation of display and application logic I think. */
  displayAddOrEditForm(allTodos, htmlList, backgroundImageBox);
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
  title: 'Put through Brenda\'s pay',
  project: 'Swindon merger',
  description: 'Develop a better system for doing this while at it.',
  dueDate: 'ASAP',
  priority: 'Medium',
}));

displayTodoList(allTodos, htmlList, backgroundImageBox);
