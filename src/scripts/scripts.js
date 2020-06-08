// APP CONTROLLER

// import bootstrap parts
import 'bootstrap/js/dist/modal'

// import models
import { createTask } from './models/Task'

// import views
import * as taskView from './views/taskView'

// import utils and configs
import { PATH } from './configs/path'
import { getInputValue } from './utils'

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

    console.log(state.taskList)
  }

  // *** EVENT LISTENERS
  document.addEventListener('click', e => {
    const target = e.target

    // adding new task
    if (target.closest(PATH.addTask.addTaskBtn)) {
      const taskTitle = getInputValue(PATH.addTask.addTaskTitle)

      const newTaskData = {
        taskTitle
      }

      tasksListController(newTaskData)
    }
  })
})()
