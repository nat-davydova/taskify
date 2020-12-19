import { hideElem, showElem } from "../utils";

export const renderTasksFromArrayOnly = (fullArr, toRenderArr) => {
  if (
    !(fullArr && toRenderArr) ||
    !(Array.isArray(fullArr) && Array.isArray(toRenderArr))
  ) {
    throw new Error(
      "Please, provide a valid array in the renderTasksFromArrayOnly function"
    );
  }

  fullArr.forEach((elem) => {
    const elemID = elem.taskId;
    const elemInUI = document.querySelector(`[data-task-id='${elemID}']`);

    let toShowElem = false;

    for (let i = 0; i < toRenderArr.length; i++) {
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
