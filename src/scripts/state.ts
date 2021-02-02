import { v4 as uuid } from "uuid";

import type { Task } from "./types";

// state holds:
// - tasks list
// - current search query
type Filter = {
  value: string;
  filteredValues: Task[];
};

type State = {
  filters: Record<string, Filter>;
  taskList: Task[];
  search: Record<string, unknown>;
};

export const state: State = {
  filters: {
    isComplete: {
      value: "incomplete",
      filteredValues: [],
    },
  },
  taskList: [
    {
      taskTitle: "Sample Task",
      taskId: uuid(),
      isComplete: "incomplete",
    },
    {
      taskTitle: "One More Sample Task",
      taskId: uuid(),
      isComplete: "incomplete",
    },
  ],
  search: {},
};
