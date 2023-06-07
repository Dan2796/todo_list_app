import todoItem from './components/todoItem';

const title = document.createElement('h1');
document.body.appendChild(title);
title.textContent = 'To-do List';

function todoList() {
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
}

const allTodos = todoList();
