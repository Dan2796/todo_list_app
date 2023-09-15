export default function displayDetails(todoItem, detailsContainer) {
  let detailsBox = document.querySelector('.detailsBox');
  if (detailsBox) {
    detailsBox.innerHTML = null;
  } else {
    detailsBox = document.createElement('div');
    detailsContainer.appendChild(detailsBox);
    detailsBox.classList.add('detailsBox');
  }
  detailsBox.classList.remove("hidden");
  
  const header = document.createElement('div');
  header.classList.add('detailsBoxHeader');
  detailsBox.appendChild(header);
  
  const titleElement = document.createElement('h3');
  titleElement.textContent = `${todoItem.getTitle()}`;
  header.appendChild(titleElement);
  
  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.onclick = () => {
    detailsBox.innerHTML = null;
    detailsBox.classList.add("hidden");
  }
  closeButton.classList.add('closeButton');
  header.appendChild(closeButton);
  
  const detailsList = document.createElement('ul');
  detailsBox.appendChild(detailsList);
  
  const projectElement = document.createElement('li');
  projectElement.textContent = `Project: ${todoItem.getProject()}`;
  detailsList.appendChild(projectElement);
  
  const descriptionElement = document.createElement('li');
  descriptionElement.textContent = `Description: ${todoItem.getDescription()}`;
  detailsList.appendChild(descriptionElement);
  
  const dueDateElement = document.createElement('li');
  dueDateElement.textContent = `Due date: ${todoItem.getDueDate()}`;
  detailsList.appendChild(dueDateElement);
  
  const priorityElement = document.createElement('li');
  priorityElement.textContent = `Priority: ${todoItem.getPriority()}`;
  detailsList.appendChild(priorityElement);
}
