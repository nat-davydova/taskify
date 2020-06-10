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
  dismissModal,
  hideElem,
  showElem,
  triggerClick
} from './utils'

(function () {
  'use strict'

  // state holds:
  // - tasks list
  // - current search query
  const state = {
    search: {},
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

  // *** SEARCH CONTROLLER
  const searchController = searchQuery => {
    state.search.query = searchQuery

    state.search.results = search(state.taskList, state.search.query)

    const tasksElems = document.querySelectorAll(PATH.task.task)

    tasksElems.forEach(elem => showElem(elem))

    tasksElems.forEach(elem => {
      const taskTitle = elem.querySelector(PATH.task.taskTitle).textContent

      if (state.search.results.indexOf(taskTitle) < 0) {
        hideElem(elem)
      }
    })
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

      searchController(searchQuery)
    }
  })

  document.addEventListener('keydown', e => {
    const target = e.target

    if (target.closest(PATH.search.searchInput) && e.code === 'Enter') {
      e.preventDefault()

      triggerClick(PATH.search.searchBtn, target.closest(PATH.search.searchForm), false)
    }
  })
})()
