import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Todo } from 'src/app/todo/todo.model';
import { TodoState } from './todo.state';

export const selectTodoFeature = createFeatureSelector<TodoState>('todo');

export const selectTodos = createSelector(
  selectTodoFeature,
  (state: TodoState): Todo[] => state.todoList
);

export const selectNumberOfTodos = createSelector(
  selectTodos,
  (todos: Todo[]): number => todos?.length || 0
);
