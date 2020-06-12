// APP CONTROLLER

// import bootstrap parts
import 'bootstrap/js/dist/modal'
import { v4 as uuid } from 'uuid'

// import models
import { createTask, delTask } from './models/Task'
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
  triggerClick,
  scrollbarIniting
} from './utils'

(function () {
  'use strict'

  // state holds:
  // - tasks list
  // - current search query
  const state = {
    search: {},
    taskList: [
      {
        taskTitle: 'Sample Task',
        taskId: uuid()
      },
      {
        taskTitle: 'One More Sample Task',
        taskId: uuid()
      }
    ]
  }

  // *** TASKS LIST CONTROLLER
  // type can be:
  // - add - for task adding
  // - pick - for picking a task
  // - del - for deleting a task
  const tasksListController = (type, taskId) => {
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
      dismissModal(PATH.editTaskModal.editModal)
    }
  }

  // *** SEARCH CONTROLLER
  const searchController = searchEl => {
    const searchForm = searchEl.closest(PATH.search.searchForm)

    state.search.query = getInputValue(PATH.search.searchInput, searchForm)

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
  document.addEventListener('DOMContentLoaded', () => {
    state.taskList.forEach(elem => {
      taskView.renderTask(elem)
    })

    scrollbarIniting(PATH.panels.tasks.tasksPanel)
  })

  document.addEventListener('click', e => {
    const target = e.target

    // adding new task
    if (target.closest(PATH.addTask.saveTaskBtn)) {
      tasksListController('add')
    }

    // checking/unchecking task
    if (target.closest(PATH.task.taskCheckbox)) {
      const task = target.closest(PATH.task.task)

      taskView.hideTask(task)
    }

    // search functional
    if (target.closest(PATH.search.searchBtn)) {
      searchController(target.closest(PATH.search.searchBtn))
    }

    // deleting task
    if (target.closest(PATH.task.taskDelBtn)) {
      const taskId = target.closest(PATH.task.task).dataset.taskId

      tasksListController('pick', taskId)
    }

    if (target.closest(PATH.delTaskModal.delTaskBtn)) {
      tasksListController('del')
    }

    // editing task
    if (target.closest(PATH.task.taskEditBtn)) {
      const taskId = target.closest(PATH.task.task).dataset.taskId

      tasksListController('pick', taskId)
    }

    if (target.closest(PATH.editTaskModal.editTaskBtn)) {
      tasksListController('edit')
    }
  })

  document.addEventListener('keyup', e => {
    const target = e.target

    if (target.closest(PATH.search.searchInput) && e.code !== 'Enter') {
      searchController(target.closest(PATH.search.searchInput))
    }
  })

  document.addEventListener('keypress', e => {
    const target = e.target

    if (target.closest(PATH.search.searchInput) && (e.code === 'Enter' || e.key === 'Enter')) {
      e.preventDefault()

      triggerClick(PATH.search.searchBtn, target.closest(PATH.search.searchForm), false)
    }

    // adding new task
    if (target.closest(PATH.addTask.addTaskTitleInput) && (e.code === 'Enter' || e.key === 'Enter')) {
      e.preventDefault()

      tasksListController('add')
    }
  })
})()
