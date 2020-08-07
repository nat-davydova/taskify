import { renderTasksFromArrayOnly } from '../utils/utils'
import { checkIfAnyDropdownOpened, dropdownToggle } from '../utils/dropdowns/dropdowns'

export const renderFilteredItems = (fullList, filteredTasksArr) => {
  renderTasksFromArrayOnly(fullList, filteredTasksArr)

  const ifOpenedDropdown = checkIfAnyDropdownOpened()

  if (ifOpenedDropdown) {
    dropdownToggle(ifOpenedDropdown)
  }
}
