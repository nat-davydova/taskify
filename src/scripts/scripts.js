// APP CONTROLLER

// import bootstrap parts
import 'bootstrap/js/dist/modal'

// import models
import { createTask } from './models/Task'
import { search } from './models/Search'

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
  dismissModal
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
        markAsError(PATH.addTask.addTaskTitleInput)
        return
      }

      dismissModal(PATH.addTask.addTaskModal)

      const newTaskData = {
        taskTitle
      }

      tasksListController(newTaskData)
    }

    // checking/unchecking task
    if (target.closest(PATH.task.taskCheckbox)) {
      const task = target.closest(PATH.task.task)

      taskView.hideTask(task)
    }

    // search functional
    if (target.closest(PATH.search.searchBtn)) {
      const searchForm = target.closest(PATH.search.searchForm)
      const searchQuery = getInputValue(PATH.search.searchInput, searchForm)

      console.log(searchQuery)
    }
  })
})()
