import { state } from "../state";

import { filters } from "../models";
import * as filtersView from "../views";
import { convertStringToCamelCase } from "../utils";

// *** HELPERS
const applyNewFilter = (filterCriterion: string, currentValue: string) => {
  const filterCriterionCamelCase = convertStringToCamelCase(
    filterCriterion,
    "-"
  );

  state.filters[filterCriterionCamelCase].value = currentValue;
  state.filters[filterCriterionCamelCase].filteredValues = filters(
    state.taskList,
    filterCriterionCamelCase,
    currentValue
  );

  filtersView.renderFilteredItems(
    state.filters[filterCriterionCamelCase].filteredValues
  );
};

const reapplyFilter = () => {
  Object.entries(state.filters).forEach(([filterName, filterVal]) => {
    const { value } = filterVal;

    // eslint-disable-next-line no-param-reassign
    filterVal.filteredValues = filters(state.taskList, filterName, value);
  });

  filtersView.renderFilteredItems(state.filters.isComplete.filteredValues);
};

// *** CONTROLLER

// type can be:
// - addNewFilter - for changing filter criterion
// - reapplyFilter - reapply filter with current settings
export const filtersController = (
  type: string,
  filterCriterion?: string,
  currentValue?: string
) => {
  if (type === "addNewFilter" && filterCriterion && currentValue) {
    applyNewFilter(filterCriterion, currentValue);
  }

  if (type === "reapplyFilter") {
    reapplyFilter();
  }
};
