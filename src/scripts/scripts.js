// APP CONTROLLER

// import models
import Task from './models/Task'

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
  const tasksListController = () => {
    const task = new Task()
    state.taskList.push(task)

    console.log()
  }
})()
