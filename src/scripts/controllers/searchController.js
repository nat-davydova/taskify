import state from '../state'

import { search } from '../models/searchModel'
import * as searchView from '../views/searchView'

import { PATH } from '../configs/path'

// *** CONTROLLER
export const searchController = searchEl => {
  const searchForm = searchEl.closest(PATH.search.searchForm)
  const searchInput = searchForm.querySelector(PATH.search.searchInput)

  state.search.query = searchInput.value

  state.search.results = search(state.taskList, state.search.query)

  searchView.renderSearchResults(state.search.results)

  console.log(state)
}
