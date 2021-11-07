import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/todo/todo.model';

export const addTodo = createAction(
  '[Todo] add Todo',
  props<{ title: string }>()
);

export const addTodoSuccess = createAction(
  '[Todo] add Todo success',
  props<{ todo: Todo }>()
);

export const deleteTodo = createAction(
  '[Todo] delete Todo',
  props<{ id: string }>()
);

export const deleteTodoSuccess = createAction(
  '[Todo] delete Todo success',
  props<{ id: string }>()
);

export const loadTodos = createAction('[Todo] load Todos');

export const loadTodosSuccess = createAction(
  '[Todo] load todos success',
  props<{ todoList: Todo[] }>()
);
