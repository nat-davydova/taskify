import {
  checkIfAnyDropdownOpened,
  toggleDropdown,
  renderTasksFromArrayOnly,
} from "../utils";

import type { Task } from "../types";

export const renderFilteredItems = (
  fullList: Task[],
  filteredTasksArr: Task[]
) => {
  renderTasksFromArrayOnly(fullList, filteredTasksArr);

  const ifOpenedDropdown = checkIfAnyDropdownOpened() as HTMLElement;

  if (ifOpenedDropdown) {
    toggleDropdown(ifOpenedDropdown);
  }
};
