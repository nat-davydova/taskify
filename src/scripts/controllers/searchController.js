import state from '../state'

import { getInputValue, hideElem, showElem } from '../utils'
import { search } from '../models/searchModel'

import { PATH } from '../configs/path'

export const searchController = searchEl => {
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
