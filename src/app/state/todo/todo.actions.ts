import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[Todo] add Todo',
  props<{ title: string }>()
);

export const deleteTodo = createAction(
  '[Todo] delete Todo',
  props<{ id: string }>()
);
