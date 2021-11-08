import { state } from '@angular/animations';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Todo } from 'src/app/todo/todo.model';
import { TodoState } from './todo.state';

export const selectTodoFeature = createFeatureSelector<TodoState>('todo');

export const selectTodos = createSelector(
  selectTodoFeature,
  (state: TodoState) => state.todoList
);

export const selectNumberOfTodos = createSelector(
  selectTodos,
  (todos: Todo[]) => todos?.length || 0
);

export const isTodoListLoading = createSelector(
  selectTodoFeature,
  (state: TodoState) => state.todoListLoading
);
