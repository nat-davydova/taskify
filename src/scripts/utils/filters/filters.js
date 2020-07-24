import { checkElemArgValid, hideElem, showElem, stringToCamelCase } from '../utils'

import { PATH } from '../../configs/path'

export const findListToFilter = filterBlockElem => {
  checkElemArgValid(filterBlockElem, 'findListToFilter')
  const listId = filterBlockElem.dataset.toFilter

  return document.querySelector(listId)
}

export const getFilterValue = filterOptionElem => {
  checkElemArgValid(filterOptionElem, 'findListToFilter')
  const filterElem = filterOptionElem.querySelector('[value]')

  return filterElem.value
}

export const getFilterCriteria = filterBlockElem => {
  checkElemArgValid(filterBlockElem, 'getFilterCriteria')

  return filterBlockElem.dataset.filterCriteria
}

const getElemsToFilter = (listOfElems, filterCriteria) => {
  return listOfElems.querySelectorAll(`[data-${filterCriteria}]`)
}

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
    const elemsToFilter = Array.from(getElemsToFilter(listToFilter, filterCriteria))

    elemsToFilter.forEach(elem => {
      const dataFilterCriteria = stringToCamelCase(filterCriteria, '-')

      const elemFilterVal = elem.dataset[dataFilterCriteria]

      if (filterValue === 'all') {
        showElem(elem)
      } else if (elemFilterVal === filterValue) {
        showElem(elem)
      } else {
        hideElem(elem)
      }
    })
  }
}
