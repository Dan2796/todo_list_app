export default function displayDetails(todoItem, htmlContainer) {
  const detailsList = document.createElement('ul');
  htmlContainer.append(detailsList);
  const titleElement = document.createElement('li');
  titleElement.textContent = `Title: ${todoItem.getTitle()}`;
  detailsList.append(titleElement);
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
