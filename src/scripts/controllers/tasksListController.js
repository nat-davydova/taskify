import state from '../state'

import { createTask, delTask, editTask } from '../models/taskModel'
import * as taskView from '../views/taskView'

import {
  checkTextEmpty,
  cleanInput,
  dismissModal,
  getInputValue,
  markAsError,
  unmarkErrored
} from '../utils'

import { PATH } from '../configs/path'

// type can be:
// - add - for task adding
// - pick - for picking a task
// - del - for deleting a task
export const tasksListController = (type, taskId) => {
  if (type === 'add') {
    const taskTitle = getInputValue(PATH.addTask.addTaskTitleInput)

    if (checkTextEmpty(taskTitle)) {
      markAsError(PATH.addTask.addTaskTitleInput)
      return
    }

    dismissModal(PATH.addTask.addTaskModal)

    const newTask = createTask(taskTitle)

    state.taskList.push(newTask)

    taskView.renderTask(newTask)

    unmarkErrored(PATH.addTask.addTaskTitleInput)
    cleanInput(PATH.addTask.addTaskTitleInput)
  }

  if (type === 'pick') {
    state.pickedItemId = taskId
  }

  if (type === 'del') {
    delTask(state.pickedItemId, state.taskList)
    dismissModal(PATH.delTaskModal.delModal)
    taskView.deleteTask(state.pickedItemId)
  }

  if (type === 'edit') {
    const newTaskTitle = getInputValue(PATH.editTaskModal.editTaskInput)

    if (checkTextEmpty(newTaskTitle)) {
      markAsError(PATH.editTaskModal.editTaskInput)
      return
    }

    dismissModal(PATH.editTaskModal.editModal)

    editTask(state.pickedItemId, state.taskList, newTaskTitle)

    taskView.editTask(state.pickedItemId, newTaskTitle)

    unmarkErrored(PATH.editTaskModal.editTaskInput)
    cleanInput(PATH.editTaskModal.editTaskInput)
  }
}
