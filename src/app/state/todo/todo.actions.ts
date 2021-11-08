import { createAction, props } from '@ngrx/store';

export const listAddButtonClicked = createAction(
  '[Todo] add Todo button clicked',
  props<{ title: string }>()
);

export const deleteTodoButtonClicked = createAction(
  '[Todo] delete Todo button clicked',
  props<{ id: string }>()
);
