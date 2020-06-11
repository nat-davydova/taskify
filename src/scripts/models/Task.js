// TASK MODEL

import { v4 as uuid } from 'uuid'

export const createTask = ({ taskTitle }) => {
  const id = uuid()

  return {
    taskTitle,
    taskId: id
  }
}
