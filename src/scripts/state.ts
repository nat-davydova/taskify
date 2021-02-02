import { v4 as uuid } from "uuid";

import type { Task } from "./types";

// state holds:
// - tasks list
// - current search query
type Filter = {
  value: string;
  filteredValues: Task[];
};

type Search = {
  query: string;
  results: Task[];
};

type State = {
  filters: Record<string, Filter>;
  taskList: Task[];
  search: Search;
  pickedItemId: string;
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
  search: {
    query: "",
    results: [],
  },
  pickedItemId: "",
};
