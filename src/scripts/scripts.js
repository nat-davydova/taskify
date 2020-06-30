// import views
import * as taskView from './views/taskView'

// import controllers
import { tasksListController } from './controllers/tasksListController'
import { searchController } from './controllers/searchController'

// import utils and configs
import state from './state'
import { PATH } from './configs/path'
import {
  triggerClick,
  scrollbarIniting
} from './utils/utils'

import { openModal, closeModal } from './utils/modals/modals'

(function () {
  'use strict'

  // *** EVENT LISTENERS
  document.addEventListener('DOMContentLoaded', () => {
    state.taskList.forEach(elem => {
      taskView.renderTask(elem)
    })

    scrollbarIniting(PATH.panels.tasks.tasksPanel)
  })

  document.addEventListener('click', e => {
    const target = e.target

    // close modal windows
    if (
      target.closest(PATH.modals.closeBtnMain) ||
      target.closest(PATH.modals.closeBtnTop)
    ) {
      const modal = target.closest(PATH.modals.modal)

      closeModal(modal)
    }

    if (target.closest(PATH.modals.modalBackdrop)) {


      const currentModal = document.querySelector(`${PATH.modals.modal}.show`)

      closeModal(currentModal)
    }

    // open add task modal
    if (target.closest(PATH.addTask.openTaskModal)) {
      openModal(PATH.addTask.addTaskModal, PATH.addTask.addTaskTitleInput)
    }

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

      openModal(PATH.delTaskModal.delModal)
    }

    if (target.closest(PATH.delTaskModal.delTaskBtn)) {
      tasksListController('del')
    }

    // editing task
    if (target.closest(PATH.task.taskEditBtn)) {
      const taskId = target.closest(PATH.task.task).dataset.taskId

      tasksListController('pick', taskId)

      openModal(PATH.editTaskModal.editModal, PATH.editTaskModal.editTaskInput)
    }

    if (target.closest(PATH.editTaskModal.editTaskBtn)) {
      tasksListController('edit')
    }
  })

  document.addEventListener('keyup', e => {
    const target = e.target

    // search on typing
    if (target.closest(PATH.search.searchInput) && e.code !== 'Enter') {
      searchController(target.closest(PATH.search.searchInput))
    }
  })

  document.addEventListener('keypress', e => {
    const target = e.target

    // if we press 'Enter' when Search Input is focused
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
