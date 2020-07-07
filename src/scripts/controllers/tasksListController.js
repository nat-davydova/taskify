import state from '../state'

import { createTask, delTask, editTask as edit } from '../models/taskModel'
import * as taskView from '../views/taskView'

import {
  checkTextEmpty,
  getInputValue,
  markAsError,
  unmarkErrored
} from '../utils/utils'

import { dismissModal } from '../utils/modals/modals'

import { PATH } from '../configs/path'

// *** HELPERS
const pickItem = taskId => {
  state.pickedItemId = taskId
}

const addTask = taskTitle => {
  const taskTitleInput = document.querySelector(PATH.addTask.addTaskTitleInput)

  if (checkTextEmpty(taskTitle)) {
    markAsError(taskTitleInput)
    return
  }

  dismissModal(PATH.addTask.addTaskModal)

  const newTask = createTask(taskTitle)

  state.taskList.push(newTask)

  taskView.renderTask(newTask)

  unmarkErrored(taskTitleInput)
  taskTitleInput.value = ''
}

const deleteTask = () => {
  delTask(state.pickedItemId, state.taskList)
  dismissModal(PATH.delTaskModal.delModal)
  taskView.deleteTask(state.pickedItemId)
}

const editTask = newTaskTitle => {
  const taskTitleInput = document.querySelector(PATH.addTask.addTaskTitleInput)

  if (checkTextEmpty(newTaskTitle)) {
    markAsError(taskTitleInput)
    return
  }

  dismissModal(PATH.editTaskModal.editModal)

  edit(state.pickedItemId, state.taskList, newTaskTitle)

  taskView.editTask(state.pickedItemId, newTaskTitle)

  unmarkErrored(taskTitleInput)
  taskTitleInput.value = ''
}

// *** CONTROLLER
// type can be:
// - add - for task adding
// - pick - for picking a task
// - del - for deleting a task
export const tasksListController = (type, taskId) => {
  if (type === 'add') {
    const taskTitle = getInputValue(PATH.addTask.addTaskTitleInput)

    addTask(taskTitle)
  }

  if (type === 'pick') {
    pickItem(taskId)
  }

  if (type === 'del') {
    deleteTask()
  }

  if (type === 'edit') {
    const newTaskTitle = getInputValue(PATH.editTaskModal.editTaskInput)

    editTask(newTaskTitle)
  }
}
