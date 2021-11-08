import { Todo } from 'src/app/todo/todo.model';

export interface TodoState {
  todoList: Todo[];
}

export const initialTodoState: TodoState = {
  todoList: [],
};
