import { renderTasksFromArray } from "../utils";

import type { Task } from "../types";

export const renderSearchResults = (searchedTasksArr: Task[]) => {
  renderTasksFromArray(searchedTasksArr);
};
