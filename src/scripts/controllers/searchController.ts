import { state } from "../state";

import { search } from "../models";
import * as searchView from "../views";

import { PATH } from "../configs";

// *** CONTROLLER
export const searchController = (searchEl: HTMLElement) => {
  const searchForm = searchEl.closest(PATH.search.searchForm);

  if (searchForm) {
    const searchInput = searchForm.querySelector(
      PATH.search.searchInput
    ) as HTMLInputElement;

    state.search.query = searchInput && searchInput.value;

    state.search.results = search(state.taskList, state.search.query);

    searchView.renderSearchResults(state.taskList, state.search.results);
  }
};
