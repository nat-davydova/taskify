import {
  checkIfAnyDropdownOpened,
  toggleDropdown,
  renderTasksFromArray,
} from "../utils";

import type { Task } from "../types";

export const renderFilteredItems = (
  fullList: Task[],
  filteredTasksArr: Task[]
) => {
  renderTasksFromArray(filteredTasksArr);

  const ifOpenedDropdown = checkIfAnyDropdownOpened() as HTMLElement;

  if (ifOpenedDropdown) {
    toggleDropdown(ifOpenedDropdown);
  }
};
