import { checkElemArgValid } from '../utils'

import { PATH } from '../../configs/path'

const findListToFilter = filterOptionElem => {
  const filterBlockElem = filterOptionElem.closest(PATH.filter.filter)
  const listId = filterBlockElem.dataset.toFilter

  return document.querySelector(listId)
}

export const applyFilter = filterOptionElem => {
  checkElemArgValid(filterOptionElem, 'applyFilter')

  const listToFilter = findListToFilter(filterOptionElem)
  console.log(listToFilter)
}
