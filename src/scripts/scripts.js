// APP CONTROLLER

// import models
import { createTask } from './models/Task'

// import utils and configs
import { PATH } from './configs/path'
import * as utils from './utils'

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
})()
