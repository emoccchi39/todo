import { TaskStatus } from "./TaskStatus";

export type Task = {
  id: string;
  name: string;
  dueDate: string;
  status: TaskStatus;
  description: string;
};
