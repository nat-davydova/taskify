import { v4 as uuid } from 'uuid'

// state holds:
// - tasks list
// - current search query
const state = {
  search: {},
  taskList: [
    {
      taskTitle: 'Sample Task',
      taskId: uuid(),
      completeState: 'incomplete'
    },
    {
      taskTitle: 'One More Sample Task',
      taskId: uuid(),
      completeState: 'incomplete'
    }
  ]
}

export default state
