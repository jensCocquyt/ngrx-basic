import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Todo } from 'src/app/todo/todo.model';
import { todoAdapter, TodoState } from './todo.state';

export const selectTodoFeature = createFeatureSelector<TodoState>('todo');

export const selectTodos = createSelector(
  selectTodoFeature,
  (state: TodoState) => todoAdapter.getSelectors().selectAll(state)
);

export const selectNumberOfTodos = createSelector(
  selectTodoFeature,
  (state: TodoState) => todoAdapter.getSelectors().selectTotal(state)
);
