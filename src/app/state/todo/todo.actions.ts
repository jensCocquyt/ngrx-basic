import { createAction, props } from '@ngrx/store';
import { Todo } from 'src/app/todo/todo.model';

export const listAddButtonClicked = createAction(
  '[Todo] list add button clicked',
  props<{ title: string }>()
);

export const listAddButtonClickedSuccess = createAction(
  '[Todo] list add button clicked success',
  props<{ todo: Todo }>()
);

export const deleteTodoButtonClicked = createAction(
  '[Todo] delete todo  button clicked ',
  props<{ id: string }>()
);

export const deleteTodoButtonClickedSuccess = createAction(
  '[Todo] delete Todo button clicked success',
  props<{ id: string }>()
);

export const loadTodosOverview = createAction('[Todo] load todos overview');

export const loadTodosOverviewSuccess = createAction(
  '[Todo] load todos overview success',
  props<{ todoList: Todo[] }>()
);
