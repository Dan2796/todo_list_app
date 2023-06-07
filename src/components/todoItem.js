export default function todoItem({
  title,
  project,
  description,
  dueDate,
  priority,
}) {
  let chosenTitle = typeof title === 'undefined' ? 'Untitled' : title;
  const getTitle = () => chosenTitle;
  const setTitle = (newTitle) => {
    chosenTitle = newTitle;
  };
  let chosenProject = typeof project === 'undefined' ? 'None' : project;
  const getProject = () => chosenProject;
  const setProject = (newProject) => {
    chosenProject = newProject;
  };
  let chosenDescription = typeof description === 'undefined' ? 'No description' : description;
  const getDescription = () => chosenDescription;
  const setDescription = (newDescription) => {
    chosenDescription = newDescription;
  };
  let chosenDueDate = typeof dueDate === 'undefined' ? 'None' : dueDate;
  const getDueDate = () => chosenDueDate;
  const setDueDate = (newDueDate) => {
    chosenDueDate = newDueDate;
  };
  let chosenPriority = typeof priority === 'undefined' ? 'None' : priority;
  const getPriority = () => chosenPriority;
  const setPriority = (newChosenPriority) => {
    if (!['None', 'Low', 'Medium', 'High'].includes(newChosenPriority)) {
      return;
    }
    chosenPriority = newChosenPriority;
  };
  return {
    getTitle,
    setTitle,
    getProject,
    setProject,
    getDescription,
    setDescription,
    getDueDate,
    setDueDate,
    getPriority,
    setPriority,
  };
}
