import {
  isAnyDropdownOpened,
  getOpenedDropdown,
  toggleDropdown,
  renderTasksFromArray,
} from "../utils";

import type { Task } from "../types";

export function renderFilteredItems(filteredTasksArr: Task[]): void {
  renderTasksFromArray(filteredTasksArr);

  const ifDropdownIsOpened = isAnyDropdownOpened();

  if (ifDropdownIsOpened) {
    const currentDropdown = getOpenedDropdown();

    if (currentDropdown) {
      toggleDropdown(currentDropdown);
    }
  }
}
