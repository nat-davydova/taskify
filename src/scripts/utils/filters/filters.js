import { checkElemArgValid } from '../utils'

import { PATH } from '../../configs/path'

const findListToFilter = filterOptionElem => {
  const filterBlockElem = filterOptionElem.closest(PATH.filter.filter)
  const listId = filterBlockElem.dataset.toFilter

  return document.querySelector(listId)
}

const getFilterValue = filterOptionElem => {
  const filterElem = filterOptionElem.querySelector('[value]')

  return filterElem.value
}

export const applyFilter = filterOptionElem => {
  checkElemArgValid(filterOptionElem, 'applyFilter')

  const listToFilter = findListToFilter(filterOptionElem)
  const filterValue = getFilterValue(filterOptionElem)

  console.log(filterValue)

  if (listToFilter) {
    // grab filter value
  }
}
