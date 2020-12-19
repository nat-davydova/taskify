import { getTemplate, appendTemplate } from "../utils/utils";
import { PATH } from "../configs";

// *** HELPERS
const findElemInTaskArr = (taskId) => {
  const tasksArr = document.querySelectorAll(PATH.task.task);

  let taskElem;

  tasksArr.forEach((elem) => {
    if (elem.dataset.taskId === taskId) {
      taskElem = elem;
    }
  });

  return taskElem;
};

// *** EXPORTS
export const renderTask = (taskData) => {
  if (!taskData || typeof taskData !== "object") {
    throw new Error("Please provide taskData to renderTask function");
  }

  const { taskTitle, taskId } = taskData;

  const taskTemplateElem = document.querySelector(PATH.task.taskTemplate);
  const taskTemplate = getTemplate(taskTemplateElem);
  const taskEl = taskTemplate.querySelector(PATH.task.task);
  const taskTitleElem = taskTemplate.querySelector(PATH.task.taskTitle);

  taskEl.dataset.taskId = taskId;

  taskTitleElem.textContent = taskTitle;

  appendTemplate(
    taskTemplate,
    document.querySelector(PATH.panels.tasks.tasksPanelContent)
  );
};

export const makeTaskComplete = (task) => {
  const taskTitle = task.querySelector(PATH.task.taskTitle);
  const taskTitleContent = taskTitle.textContent;
  const newTaskTitle = `
    <del>
        ${taskTitleContent}
    </del>
  `;

  taskTitle.innerHTML = newTaskTitle;

  task.dataset.isComplete = "complete";
};

export const makeTaskIncomplete = (task) => {
  const taskTitle = task.querySelector(PATH.task.taskTitle);
  const taskTitleContent = taskTitle.textContent;
  taskTitle.innerHTML = taskTitleContent;

  task.dataset.isComplete = "incomplete";
};

export const toggleTaskCompleteness = (taskId) => {
  const task = findElemInTaskArr(taskId);
  const currentStatus = task.dataset.isComplete;

  if (currentStatus === "incomplete") {
    makeTaskComplete(task);
  } else if (currentStatus === "complete") {
    makeTaskIncomplete(task);
  }
};

export const deleteTask = (taskId) => {
  if (!taskId) {
    throw new Error("Provide a valid task id in deleteTask function");
  }

  const taskElemToDel = findElemInTaskArr(taskId);

  taskElemToDel.remove();
};

export const editTask = (taskId, newTitle) => {
  if (!taskId) {
    throw new Error("Provide a valid task id in editTask function");
  }

  if (!newTitle || typeof newTitle !== "string") {
    throw new Error("Provide a valid title into editTask function");
  }

  const taskElemToEdit = findElemInTaskArr(taskId);

  const titleElem = taskElemToEdit.querySelector(PATH.task.taskTitle);

  titleElem.textContent = newTitle;
};
