import { v4 as uuid } from 'uuid'

// state holds:
// - tasks list
// - current search query
const state = {
  filters: {
    isComplete: {
      value: 'all',
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

export default state
