import state from '../state'

import { filters } from '../models/filtersModel'
import { stringToCamelCase } from '../utils/utils'

// *** CONTROLLER

export const filtersController = (filterCriteria, currentValue) => {
  const filterCriteriaCamelCase = stringToCamelCase(filterCriteria, '-')

  state.filters[filterCriteriaCamelCase].value = currentValue
  //state.filter[filterCriteriaCamelCase].filteredValues = filters(state.taskList, filterCriteriaCamelCase, currentValue)

  console.log(state)
}
