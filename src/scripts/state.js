import { v4 as uuid } from 'uuid'

// state holds:
// - tasks list
// - current search query
const state = {
  filters: {
    completeState: {
      value: 'incomplete',
      filteredValues: []
    }
  },
  taskList: [
    {
      taskTitle: 'Sample Task',
      taskId: uuid(),
      isTaskComplete: false
    },
    {
      taskTitle: 'One More Sample Task',
      taskId: uuid(),
      isTaskComplete: false
    }
  ],
  search: {}
}

export default state
