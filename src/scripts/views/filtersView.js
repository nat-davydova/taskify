import { renderTasksFromArrayOnly } from "../utils/tasks/tasks";
import { checkIfAnyDropdownOpened, dropdownToggle } from "../utils";

export const renderFilteredItems = (fullList, filteredTasksArr) => {
  renderTasksFromArrayOnly(fullList, filteredTasksArr);

  const ifOpenedDropdown = checkIfAnyDropdownOpened();

  if (ifOpenedDropdown) {
    dropdownToggle(ifOpenedDropdown);
  }
};
