import { state } from "../state";

import { search } from "../models";
import * as searchView from "../views";

import { PATH } from "../configs";

// *** CONTROLLER
export const searchController = (searchEl) => {
  const searchForm = searchEl.closest(PATH.search.searchForm);
  const searchInput = searchForm.querySelector(PATH.search.searchInput);

  state.search.query = searchInput.value;

  state.search.results = search(state.taskList, state.search.query);

  searchView.renderSearchResults(state.taskList, state.search.results);
};
