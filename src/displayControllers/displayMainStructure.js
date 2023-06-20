export default function displayMainStructure() {
  
  const backgroundImageBox = document.createElement('div');
  backgroundImageBox.classList.add('backgroundImageBox');
  
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
  
  return backgroundImageBox;

}