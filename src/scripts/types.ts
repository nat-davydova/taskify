export type TaskStatus = "incomplete" | "complete";

export type Task = {
  taskId: string;
  taskTitle: string;
  isComplete: TaskStatus;
};
