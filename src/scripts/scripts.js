// APP CONTROLLER

// import bootstrap parts
import 'bootstrap/js/dist/modal'

// import models
import { createTask } from './models/Task'

// import views
import * as taskView from './views/taskView'

// import utils and configs
import { PATH } from './configs/path'
import {
  cleanInput,
  getInputValue,
  checkTextEmpty,
  markAsError,
  unmarkErrored,
  btnModalDeprecateDismiss,
  btnModalAllowDismiss
} from './utils'

(function () {
  'use strict'

  // state holds:
  // - tasks list
  const state = {
    taskList: []
  }

  // *** TASKS LIST CONTROLLER
  const tasksListController = (taskData) => {
    const newTask = createTask(taskData)
    state.taskList.push(newTask)

    taskView.renderTask(taskData)

    unmarkErrored(PATH.addTask.addTaskTitleInput)
    cleanInput(PATH.addTask.addTaskTitleInput)
  }

  // *** EVENT LISTENERS
  document.addEventListener('click', e => {
    const target = e.target

    // adding new task
    if (target.closest(PATH.addTask.saveTaskBtn)) {
      const taskTitle = getInputValue(PATH.addTask.addTaskTitleInput)

      if (checkTextEmpty(taskTitle)) {
        btnModalDeprecateDismiss(PATH.addTask.saveTaskBtn)
        markAsError(PATH.addTask.addTaskTitleInput)
        return
      }

      btnModalAllowDismiss(PATH.addTask.saveTaskBtn)

      const newTaskData = {
        taskTitle
      }

      tasksListController(newTaskData)
    }
  })
})()
