// TASK MODEL

import { v4 as uuid } from 'uuid'

// *** HELPERS
const findATaskIndex = (taskId, taskDataArr) => {
  if (
    !taskId ||
    typeof taskId !== 'string'
  ) {
    throw new Error('Provide a string id as a TaskId')
  }

  if (!taskDataArr) {
    throw new Error('Provide a task array')
  }

  let taskIndex

  for (let i = 0; i < taskDataArr.length; i++) {
    if (taskDataArr[i].taskId === taskId) {
      taskIndex = i
      break
    }
  }

  return taskIndex
}

// *** EXPORTS
export const createTask = (...taskData) => {
  const [taskTitle] = taskData

  const id = uuid()

  return {
    taskTitle,
    taskId: id
  }
}

export const delTask = (taskId, taskDataArr) => {
  const taskInd = findATaskIndex(taskId, taskDataArr)

  taskDataArr.splice(taskInd, 1)
}

export const editTask = (taskId, taskDataArr, taskTitle) => {
  const taskInd = findATaskIndex(taskId, taskDataArr)

  taskDataArr[taskInd].taskTitle = taskTitle
}
