import type { Task } from "../types";

export const filters = (
  tasksArr: Task[],
  filterCriterion: string,
  currentValue: string
) => {
  const filteredArr: Task[] = [];

  tasksArr.forEach((elem) => {
    if (currentValue === "all" || elem.isComplete === currentValue) {
      filteredArr.push(elem);
    }
  });

  return filteredArr;
};
