import { v4 as uuid } from 'uuid'

// state holds:
// - tasks list
// - current search query
export const state = {
  filters: {
    isComplete: {
      value: 'incomplete',
      filteredValues: []
    }
  },
  taskList: [
    {
      taskTitle: 'Sample Task',
      taskId: uuid(),
      isComplete: 'incomplete'
    },
    {
      taskTitle: 'One More Sample Task',
      taskId: uuid(),
      isComplete: 'incomplete'
    }
  ],
  search: {}
}
