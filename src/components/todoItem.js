export default function todoItem({
  title,
  project,
  description,
  dueDate,
  priority,
}) {
  // this is backup only since will make title mandatory field
  let chosenTitle = title === '' ? 'Untitled' : title;
  const getTitle = () => chosenTitle;
  const setTitle = (newTitle) => {
    chosenTitle = newTitle;
  };
  let chosenProject = project === '' ? 'None' : project;
  const getProject = () => chosenProject;
  const setProject = (newProject) => {
    chosenProject = newProject;
  };
  let chosenDescription = description === '' ? 'No description' : description;
  const getDescription = () => chosenDescription;
  const setDescription = (newDescription) => {
    chosenDescription = newDescription;
  };
  let chosenDueDate = dueDate === '' ? 'None' : dueDate;
  const getDueDate = () => chosenDueDate;
  const setDueDate = (newDueDate) => {
    chosenDueDate = newDueDate;
  };
  let chosenPriority = priority === '' ? 'None' : priority;
  const getPriority = () => chosenPriority;
  const setPriority = (newChosenPriority) => {
    if (!['None', 'Low', 'Medium', 'High'].includes(newChosenPriority)) {
      return;
    }
    chosenPriority = newChosenPriority;
  };
  let done = false;
  const toggleDone = () => done = !done;
  const getDone = () => done;
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
    toggleDone,
    getDone,
  };
}
