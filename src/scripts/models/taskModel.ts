import { v4 as uuid } from "uuid";

import type { Task } from "../types";

const findATaskIndex = (taskId: string, taskDataArr: Task[]) => {
  let taskIndex;

  for (let i = 0; i < taskDataArr.length; i++) {
    if (taskDataArr[i].taskId === taskId) {
      taskIndex = i;
      break;
    }
  }

  return taskIndex;
};

export const createTask = (...taskData: Task[]) => {
  const [taskTitle] = taskData;

  const id = uuid();

  return {
    taskTitle,
    taskId: id,
    isComplete: "incomplete",
  };
};

export const delTask = (taskId: string, taskDataArr: Task[]) => {
  const taskInd = findATaskIndex(taskId, taskDataArr);

  if (taskInd) {
    taskDataArr.splice(taskInd, 1);
  }
};

export const editTask = (
  taskId: string,
  taskDataArr: Task[],
  taskTitle: string
) => {
  const taskInd = findATaskIndex(taskId, taskDataArr);

  if (taskInd) {
    // eslint-disable-next-line no-param-reassign
    taskDataArr[taskInd].taskTitle = taskTitle;
  }
};

export const changeTaskCompleteness = (taskId: string, taskDataArr: Task[]) => {
  const taskInd = findATaskIndex(taskId, taskDataArr);

  if (taskInd) {
    const currentStatus = taskDataArr[taskInd].isComplete;

    // eslint-disable-next-line no-param-reassign
    taskDataArr[taskInd].isComplete =
      currentStatus === "complete" ? "incomplete" : "complete";
  }
};
