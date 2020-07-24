import state from '../state'

import { filters } from '../models/filtersModel'
import { stringToCamelCase } from '../utils/utils'

// *** CONTROLLER

export const filtersController = (listToFilter, filterCriteria, currentValue) => {

  const filterCriteriaCamelCase = stringToCamelCase(filterCriteria, '-')

  state.filters[filterCriteriaCamelCase].value = currentValue

  console.log(state)
}
