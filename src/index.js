import todoItem from './components/todoItem';
import displayTodoList from './displayControllers/displayTodoList';
import displayDetails from './displayControllers/displayDetails';

const container = document.createElement('div');
document.body.appendChild(container);
const title = document.createElement('h1');
container.appendChild(title);
title.textContent = 'To-do List';
const todoBox = document.createElement('div');
container.appendChild(todoBox);
const htmlList = document.createElement('ol');
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
  return { getListOfTodos, getProjects, addTodo };
})();

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
displayDetails(allTodos.getListOfTodos()[0], container);
