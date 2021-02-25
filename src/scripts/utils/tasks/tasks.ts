import { hideElem, showElem } from "../utils";
import { PATH } from "../../configs";

import type { Task } from "../../types";

function hideAllTasks(): void {
  const tasks = Array.from(
    document.querySelectorAll(PATH.task.task)
  ) as HTMLElement[];
  tasks.forEach((elem) => hideElem(elem));
}

function revealTasksFromArray(tasksArr: Task[]): void {
  tasksArr.forEach(({ taskId }) => {
    const taskElem = document.querySelector(
      `[data-task-id='${taskId}']`
    ) as HTMLElement;

    showElem(taskElem);
  });
}

export function renderTasksFromArray(tasksArr: Task[]): void {
  hideAllTasks();

  revealTasksFromArray(tasksArr);
}
