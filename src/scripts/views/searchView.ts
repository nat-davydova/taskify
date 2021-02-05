import { renderTasksFromArrayOnly } from "../utils";

import type { Task } from "../types";

export const renderSearchResults = (
  fullList: Task[],
  searchedTasksArr: Task[]
) => {
  renderTasksFromArrayOnly(fullList, searchedTasksArr);
};
