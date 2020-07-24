import { checkElemArgValid } from '../utils'

export const getFilterValue = filterOptionElem => {
  checkElemArgValid(filterOptionElem, 'findListToFilter')
  const filterElem = filterOptionElem.querySelector('[value]')

  return filterElem.value
}

export const getFilterCriteria = filterBlockElem => {
  checkElemArgValid(filterBlockElem, 'getFilterCriteria')

  return filterBlockElem.dataset.filterCriteria
}
