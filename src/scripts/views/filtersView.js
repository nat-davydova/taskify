import {
  checkIfAnyDropdownOpened,
  dropdownToggle,
  renderTasksFromArrayOnly,
} from "../utils";

export const renderFilteredItems = (fullList, filteredTasksArr) => {
  renderTasksFromArrayOnly(fullList, filteredTasksArr);

  const ifOpenedDropdown = checkIfAnyDropdownOpened();

  if (ifOpenedDropdown) {
    dropdownToggle(ifOpenedDropdown);
  }
};
