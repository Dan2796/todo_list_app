export default function displayDetails(todoItem, detailsContainer) {
  let detailsBox = document.querySelector('.detailsBox');
  if (detailsBox) {
    detailsBox.innerHTML = null;
  } else {
    detailsBox = document.createElement('div');
    detailsContainer.append(detailsBox);
    detailsBox.classList.add('detailsBox');
  }
  const header = document.createElement('div');
  // header
  header.classList.add('detailsBoxHeader');
  detailsBox.append(header);
  const titleElement = document.createElement('h3');
  titleElement.textContent = `${todoItem.getTitle()}`;
  header.append(titleElement);
  const closeButton = document.createElement('button');
  closeButton.textContent = 'X';
  closeButton.onclick = () => detailsBox.innerHTML = null;
  closeButton.classList.add('closeButton');
  header.append(closeButton);
  // list
  const detailsList = document.createElement('ul');
  detailsBox.append(detailsList);
  const projectElement = document.createElement('li');
  projectElement.textContent = `Project: ${todoItem.getProject()}`;
  detailsList.append(projectElement);
  const descriptionElement = document.createElement('li');
  descriptionElement.textContent = `Description: ${todoItem.getDescription()}`;
  detailsList.append(descriptionElement);
  const dueDateElement = document.createElement('li');
  dueDateElement.textContent = `Due date: ${todoItem.getDueDate()}`;
  detailsList.append(dueDateElement);
  const priorityElement = document.createElement('li');
  priorityElement.textContent = `Priority: ${todoItem.getPriority()}`;
  detailsList.append(priorityElement);
}
