import { checkElemArgValid, hideElem, showElem } from '../utils'

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
      const elemFilterVal = elem.dataset.completeState

      console.log(filterCriteria)
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
