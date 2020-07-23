import state from '../state'

import { search } from '../models/searchModel'
import * as searchView from '../views/searchView'
import { hideElem, showElem } from '../utils/utils'

import { PATH } from '../configs/path'

// *** HELPERS
// const renderSearchResults = searchArr => {
//   searchArr.forEach(elem => showElem(elem))
//
//   searchArr.forEach(elem => {
//     const taskTitle = elem.querySelector(PATH.task.taskTitle).textContent
//
//     if (state.search.results.indexOf(taskTitle) < 0) {
//       hideElem(elem)
//     }
//   })
// }

// *** CONTROLLER
export const searchController = searchEl => {
  const searchForm = searchEl.closest(PATH.search.searchForm)
  const searchInput = searchForm.querySelector(PATH.search.searchInput)

  state.search.query = searchInput.value

  state.search.results = search(state.taskList, state.search.query)

  // const tasksElems = document.querySelectorAll(PATH.task.task)
  //
  // //renderSearchResults(tasksElems)

  console.log(state)
}
