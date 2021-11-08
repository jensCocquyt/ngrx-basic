import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/todo/todo.model';
import {
  listAddButtonClickedSuccess,
  deleteTodoButtonClickedSuccess,
  loadTodosOverviewSuccess,
  loadTodosOverview,
} from './todo.actions';
import { initialTodoState } from './todo.state';

export const todoReducer = createReducer(
  initialTodoState,
  on(listAddButtonClickedSuccess, (state, { todo }) => ({
    ...state,
    todoList: [...state.todoList, todo],
  })),
  on(deleteTodoButtonClickedSuccess, (state, { id }) => ({
    ...state,
    todoList: state.todoList.filter((t) => t.id !== id),
  })),
  on(loadTodosOverview, (state) => ({
    ...state,
    todoListLoading: true,
  })),
  on(loadTodosOverviewSuccess, (state, { todoList }) => ({
    ...state,
    todoList: [...todoList],
    todoListLoading: false,
  }))
);
