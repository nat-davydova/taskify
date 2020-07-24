import state from '../state'

import { filters } from '../models/filtersModel'
import * as filtersView from '../views/filtersView'
import { stringToCamelCase } from '../utils/utils'

// *** CONTROLLER

export const filtersController = (filterCriteria, currentValue) => {
  const filterCriteriaCamelCase = stringToCamelCase(filterCriteria, '-')

  state.filters[filterCriteriaCamelCase].value = currentValue
  state.filters[filterCriteriaCamelCase].filteredValues = filters(state.taskList, filterCriteriaCamelCase, currentValue)

  filtersView.renderFilteredItems(state.taskList, state.filters[filterCriteriaCamelCase].filteredValues)
}
