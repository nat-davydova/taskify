import { state } from "../state";

import { filters } from "../models";
import * as filtersView from "../views";
import { convertStringToCamelCase } from "../utils";

// *** HELPERS
const applyNewFilter = (filterCriteria: string, currentValue: string) => {
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
  Object.entries(state.filters).forEach(([filterName, filterVal]) => {
    const { value } = filterVal;

    // eslint-disable-next-line no-param-reassign
    filterVal.filteredValues = filters(state.taskList, filterName, value);
  });

  filtersView.renderFilteredItems(
    state.taskList,
    state.filters.isComplete.filteredValues
  );
};

// *** CONTROLLER

// type can be:
// - addNewFilter - for changing filter criteria
// - reapplyFilter - reapply filter with current settings
export const filtersController = (
  type: string,
  filterCriteria?: string,
  currentValue?: string
) => {
  if (type === "addNewFilter" && filterCriteria && currentValue) {
    applyNewFilter(filterCriteria, currentValue);
  }

  if (type === "reapplyFilter") {
    reapplyFilter();
  }
};
