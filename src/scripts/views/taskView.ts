import { getTemplate, appendTemplate } from "../utils";
import { PATH } from "../configs";
import type { Task } from "../types";

// *** HELPERS
const findElemInTaskArr = (taskId: string): HTMLElement | undefined => {
  const tasksArr = Array.from(
    document.querySelectorAll(PATH.task.task)
  ) as HTMLElement[];

  let taskElem;

  tasksArr.forEach((elem) => {
    if (elem.dataset.taskId === taskId) {
      taskElem = elem;
    }
  });

  return taskElem;
};

// *** EXPORTS
export const renderTask = (taskData: Task) => {
  const { taskTitle, taskId } = taskData;

  const taskTemplateElem = document.querySelector(
    PATH.task.taskTemplate
  ) as HTMLTemplateElement;
  const taskTemplate = taskTemplateElem && getTemplate(taskTemplateElem);
  const taskEl = taskTemplate.querySelector(PATH.task.task) as HTMLElement;
  const taskTitleElem = taskTemplate.querySelector(
    PATH.task.taskTitle
  ) as HTMLElement;

  taskEl.dataset.taskId = taskId;

  taskTitleElem.textContent = taskTitle;

  const appendDestination = document.querySelector(
    PATH.panels.tasks.tasksPanelContent
  ) as HTMLElement;

  if (appendDestination) {
    appendTemplate(taskTemplate, appendDestination);
  }
};

export const makeTaskComplete = (task: HTMLElement) => {
  const taskTitle = task.querySelector(PATH.task.taskTitle) as HTMLElement;
  const taskTitleContent = taskTitle.textContent;
  const newTaskTitle = `
    <del>
        ${taskTitleContent}
    </del>
  `;

  taskTitle.innerHTML = newTaskTitle;

  // eslint-disable-next-line no-param-reassign
  task.dataset.isComplete = "complete";
};

export const makeTaskIncomplete = (task: HTMLElement) => {
  const taskTitle = task.querySelector(PATH.task.taskTitle) as HTMLElement;

  const taskTitleContent = taskTitle.textContent;
  taskTitle.textContent = taskTitleContent;

  // eslint-disable-next-line no-param-reassign
  task.dataset.isComplete = "incomplete";
};

export const toggleTaskCompleteness = (taskId: string) => {
  const task = findElemInTaskArr(taskId);
  if (task) {
    const currentStatus = task.dataset.isComplete;

    if (currentStatus === "incomplete") {
      makeTaskComplete(task);
    } else if (currentStatus === "complete") {
      makeTaskIncomplete(task);
    }
  }
};

export const deleteTask = (taskId: string) => {
  const taskElemToDel = findElemInTaskArr(taskId);

  if (taskElemToDel) {
    taskElemToDel.remove();
  }
};

export const editTask = (taskId: string, newTitle: string) => {
  const taskElemToEdit = findElemInTaskArr(taskId);

  if (taskElemToEdit) {
    const titleElem = taskElemToEdit.querySelector(PATH.task.taskTitle);

    if (titleElem) {
      titleElem.textContent = newTitle;
    }
  }
};
