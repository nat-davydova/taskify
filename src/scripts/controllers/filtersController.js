import { state } from "../state";

import { filters } from "../models";
import * as filtersView from "../views";
import { convertStringToCamelCase } from "../utils";

// *** HELPERS
const applyNewFilter = (filterCriteria, currentValue) => {
  const filterCriteriaCamelCase = convertStringToCamelCase(filterCriteria, "-");

  state.filters[filterCriteriaCamelCase].value = currentValue;
  state.filters[filterCriteriaCamelCase].filteredValues = filters(
    state.taskList,
    filterCriteriaCamelCase,
    currentValue
  );

  filtersView.renderFilteredItems(
    state.taskList,
    state.filters[filterCriteriaCamelCase].filteredValues
  );
};

const reapplyFilter = () => {
  for (const filter in state.filters) {
    const currentValue = state.filters[filter].value;
    state.filters[filter].filteredValues = filters(
      state.taskList,
      filter,
      currentValue
    );
  }

  filtersView.renderFilteredItems(
    state.taskList,
    state.filters.isComplete.filteredValues
  );
};

// *** CONTROLLER

// type can be:
// - addNewFilter - for changing filter criteria
// - reapplyFilter - reapply filter with current settings
export const filtersController = (type, filterCriteria, currentValue) => {
  if (type === "addNewFilter") {
    applyNewFilter(filterCriteria, currentValue);
  }

  if (type === "reapplyFilter") {
    reapplyFilter();
  }
};
