import type { Task } from "../types";

export const search = (list: Task[], query: string) => {
  const queryRegExp = new RegExp(query, "ig");

  const searchResults: Task[] = [];

  list.forEach((elem) => {
    const { taskTitle } = elem;

    if (taskTitle.match(queryRegExp)) {
      searchResults.push(elem);
    }
  });

  return searchResults;
};
