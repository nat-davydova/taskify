import { checkElemArgValid } from '../utils'

import { PATH } from '../../configs/path'

const findListToFilter = filterBlockElem => {
  const listId = filterBlockElem.dataset.toFilter

  return document.querySelector(listId)
}

const getFilterValue = filterOptionElem => {
  const filterElem = filterOptionElem.querySelector('[value]')

  return filterElem.value
}

const getFilterCriteria = filterBlockElem => filterBlockElem.dataset.filterCriteria

export const applyFilter = filterOptionElem => {
  checkElemArgValid(filterOptionElem, 'applyFilter')

  const filterBlockElem = filterOptionElem.closest(PATH.filter.filter)
  checkElemArgValid(filterBlockElem, 'applyFilter')

  const listToFilter = findListToFilter(filterBlockElem)
  const filterValue = getFilterValue(filterOptionElem)
  const filterCriteria = getFilterCriteria(filterBlockElem)

  if (
    listToFilter &&
    filterValue &&
    filterCriteria
  ) {
    // grab filter value
    console.log(listToFilter, filterValue, filterCriteria)
  }
}
