// TASK MODEL

import { v4 as uuid } from 'uuid'

export const createTask = (...taskData) => {
  const [taskTitle] = taskData

  const id = uuid()

  return {
    taskTitle,
    taskId: id
  }
}

export const delTask = (taskId, taskDataArr) => {
  let delElemIndex

  for (let i = 0; i < taskDataArr.length; i++) {
    if (taskDataArr[i].taskId === taskId) {
      delElemIndex = i
      break
    }
  }

  taskDataArr.splice(delElemIndex, 1)
}
