import type { Task, TaskStatus } from "../types";

export const filters = (
  tasksArr: Task[],
  filterCriteria: TaskStatus,
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
