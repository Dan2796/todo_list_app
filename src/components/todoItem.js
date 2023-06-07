export default function todoItem(
  title,
  description,
  dueDate,
  priority,
  project = 'None',
) {
  let chosenTitle = title;
  const getTitle = () => chosenTitle;
  const setTitle = (newTitle) => {
    chosenTitle = newTitle;
  };
  let chosenProject = project;
  const getProject = () => chosenProject;
  const setProject = (newProject) => {
    chosenProject = newProject;
  };
  let chosenDescription = description;
  const getDescription = () => chosenDescription;
  const setDescription = (newDescription) => {
    chosenDescription = newDescription;
  };
  let chosenDueDate = dueDate;
  const getDueDate = () => chosenDueDate;
  const setDueDate = (newDueDate) => {
    chosenDueDate = newDueDate;
  };
  let chosenPriority = priority;
  const getPriority = () => chosenPriority;
  const setPriority = (newChosenPriority) => {
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
