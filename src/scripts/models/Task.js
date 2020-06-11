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
