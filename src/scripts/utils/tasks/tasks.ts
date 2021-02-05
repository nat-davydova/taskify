import { hideElem, showElem } from "../utils";

import type { Task } from "../../types";

export const renderTasksFromArrayOnly = (
  fullArr: Task[],
  toRenderArr: Task[]
) => {
  fullArr.forEach((elem) => {
    const elemID = elem.taskId;
    const elemInUI = document.querySelector(
      `[data-task-id='${elemID}']`
    ) as HTMLElement;

    let toShowElem = false;

    for (let i = 0; i < toRenderArr.length; i += 1) {
      if (toRenderArr[i].taskId === elemID) {
        toShowElem = true;
        break;
      }
    }

    if (toShowElem && elemInUI) {
      showElem(elemInUI);
    } else if (elemInUI) {
      hideElem(elemInUI);
    }
  });
};
