import { Todo } from 'src/app/todo/todo.model';

export interface TodoState {
  todoList: Todo[];
  todoListLoading: boolean;
}

export const initialTodoState: TodoState = {
  todoList: [],
  todoListLoading: false,
};
