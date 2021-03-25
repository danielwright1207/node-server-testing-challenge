function intToBool(int) {
  return int === 1 ? true : false;
}
function projectToBody(project) {
  const result = {
    ...project,
    project_completed: intToBool(project.project_completed),
  };
  return result;
}
function taskToBody(task) {
  const result = {
    ...task,
    task_completed: intToBool(task.task_completed),
  };
  return result;
}
module.exports = { projectToBody, taskToBody };
