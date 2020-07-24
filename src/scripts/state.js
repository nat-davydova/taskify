import { v4 as uuid } from 'uuid'

// state holds:
// - tasks list
// - current search query
const state = {
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
      isComplete: false
    },
    {
      taskTitle: 'One More Sample Task',
      taskId: uuid(),
      isComplete: false
    }
  ],
  search: {}
}

export default state
