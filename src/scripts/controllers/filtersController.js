import state from '../state'

import { filters } from '../models/filtersModel'
import * as filtersView from '../views/filtersView'
import { stringToCamelCase } from '../utils/utils'

// *** HELPERS
const applyNewFilter = (filterCriteria, currentValue) => {
  const filterCriteriaCamelCase = stringToCamelCase(filterCriteria, '-')

  state.filters[filterCriteriaCamelCase].value = currentValue
  state.filters[filterCriteriaCamelCase].filteredValues = filters(state.taskList, filterCriteriaCamelCase, currentValue)

  filtersView.renderFilteredItems(state.taskList, state.filters[filterCriteriaCamelCase].filteredValues)
}

const reapplyFilter = () => {
  const currentValue = state.filters.isComplete.value
  state.filters.isComplete.filteredValues = filters(state.taskList, `isComplete`, currentValue)

  filtersView.renderFilteredItems(state.taskList, state.filters.isComplete.filteredValues)

  console.log(state.filters.isComplete.filteredValues)
}

// *** CONTROLLER

// type can be:
// - addNewFilter - for changing filter criteria
// - reapplyFilter - reapply filter with current settings
export const filtersController = (type, filterCriteria, currentValue) => {
  if (type === 'addNewFilter') {
    applyNewFilter(filterCriteria, currentValue)
  }

  if (type === 'reapplyFilter') {
    reapplyFilter()
  }
}
