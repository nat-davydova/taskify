import { state } from "../state";

import {
  createTask,
  delTask,
  editTask as edit,
  changeTaskCompleteness,
} from "../models";
import * as taskView from "../views";

import {
  isStringEmpty,
  markAsError,
  unmarkErrored,
  closeModal,
} from "../utils";

import { PATH } from "../configs";

// *** HELPERS
const pickItem = (taskId: string) => {
  state.pickedItemId = taskId;
};

const addTask = (taskTitle: string) => {
  const taskTitleInput = document.querySelector(
    PATH.addTask.addTaskTitleInput
  ) as HTMLInputElement;

  if (isStringEmpty(taskTitle)) {
    markAsError(taskTitleInput);
    return;
  }

  const modal = document.querySelector(
    PATH.addTask.addTaskModal
  ) as HTMLElement;
  closeModal(modal);

  const newTask = createTask(taskTitle);

  state.taskList.push(newTask);

  taskView.renderTask(newTask);

  unmarkErrored(taskTitleInput);
  taskTitleInput.value = "";
};

const deleteTask = () => {
  delTask(state.pickedItemId, state.taskList);

  const modal = document.querySelector(
    PATH.delTaskModal.delModal
  ) as HTMLElement;
  closeModal(modal);

  taskView.deleteTask(state.pickedItemId);
};

const editTask = (newTaskTitle: string) => {
  const taskTitleInput = document.querySelector(
    PATH.editTaskModal.editTaskInput
  ) as HTMLInputElement;

  if (isStringEmpty(newTaskTitle)) {
    markAsError(taskTitleInput);
    return;
  }

  const modal = document.querySelector(
    PATH.editTaskModal.editModal
  ) as HTMLElement;
  closeModal(modal);

  edit(state.pickedItemId, state.taskList, newTaskTitle);

  taskView.editTask(state.pickedItemId, newTaskTitle);

  unmarkErrored(taskTitleInput);
  taskTitleInput.value = "";
};

const changeTaskCompletenessStatus = (taskId: string) => {
  changeTaskCompleteness(taskId, state.taskList);

  taskView.toggleTaskCompleteness(taskId);
};

// *** CONTROLLER
type TaskAction = "add" | "pick" | "del" | "edit" | "changeCompletenessStatus";

export const tasksListController = (type: TaskAction, taskId: string) => {
  if (type === "add") {
    const taskInput = document.querySelector(
      PATH.addTask.addTaskTitleInput
    ) as HTMLInputElement;
    const taskTitle = taskInput.value;

    addTask(taskTitle);
  }

  if (type === "pick") {
    pickItem(taskId);
  }

  if (type === "del") {
    deleteTask();
  }

  if (type === "edit") {
    const newTaskTitleInput = document.querySelector(
      PATH.editTaskModal.editTaskInput
    ) as HTMLInputElement;

    const newTaskTitle = newTaskTitleInput.value;

    editTask(newTaskTitle);
  }

  if (type === "changeCompletenessStatus") {
    changeTaskCompletenessStatus(taskId);
  }
};
