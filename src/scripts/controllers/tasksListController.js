import { state } from "../state";

import {
  createTask,
  delTask,
  editTask as edit,
  changeTaskCompleteness,
} from "../models";
import * as taskView from "../views/taskView";

import {
  isStringEmpty,
  markAsError,
  unmarkErrored,
  closeModal,
} from "../utils";

import { PATH } from "../configs";

// *** HELPERS
const pickItem = (taskId) => {
  state.pickedItemId = taskId;
};

const addTask = (taskTitle) => {
  const taskTitleInput = document.querySelector(PATH.addTask.addTaskTitleInput);

  if (isStringEmpty(taskTitle)) {
    markAsError(taskTitleInput);
    return;
  }

  const modal = document.querySelector(PATH.addTask.addTaskModal);
  closeModal(modal);

  const newTask = createTask(taskTitle);

  state.taskList.push(newTask);

  taskView.renderTask(newTask);

  unmarkErrored(taskTitleInput);
  taskTitleInput.value = "";
};

const deleteTask = () => {
  delTask(state.pickedItemId, state.taskList);

  const modal = document.querySelector(PATH.delTaskModal.delModal);
  closeModal(modal);

  taskView.deleteTask(state.pickedItemId);
};

const editTask = (newTaskTitle) => {
  const taskTitleInput = document.querySelector(
    PATH.editTaskModal.editTaskInput
  );

  if (isStringEmpty(newTaskTitle)) {
    markAsError(taskTitleInput);
    return;
  }

  const modal = document.querySelector(PATH.editTaskModal.editModal);
  closeModal(modal);

  edit(state.pickedItemId, state.taskList, newTaskTitle);

  taskView.editTask(state.pickedItemId, newTaskTitle);

  unmarkErrored(taskTitleInput);
  taskTitleInput.value = "";
};

const changeTaskCompletenessStatus = (taskId) => {
  changeTaskCompleteness(taskId, state.taskList);

  taskView.toggleTaskCompleteness(taskId);
};

// *** CONTROLLER
// type can be:
// - add - for task adding
// - pick - for picking a task
// - del - for deleting a task
export const tasksListController = (type, taskId) => {
  if (type === "add") {
    const taskTitle = document.querySelector(PATH.addTask.addTaskTitleInput)
      .value;

    addTask(taskTitle);
  }

  if (type === "pick") {
    pickItem(taskId);
  }

  if (type === "del") {
    deleteTask();
  }

  if (type === "edit") {
    const newTaskTitle = document.querySelector(
      PATH.editTaskModal.editTaskInput
    ).value;

    editTask(newTaskTitle);
  }

  if (type === "changeCompletenessStatus") {
    changeTaskCompletenessStatus(taskId);
  }
};
