import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/todo/todo.model';
import {
  addTodoSuccess,
  deleteTodoSuccess,
  loadTodosSuccess,
} from './todo.actions';
import { initialTodoState } from './todo.state';

export const todoReducer = createReducer(
  initialTodoState,

  on(addTodoSuccess, (state, { todo }) => ({
    ...state,
    todoList: [...state.todoList, todo],
  })),
  on(deleteTodoSuccess, (state, { id }) => ({
    ...state,
    todoList: state.todoList.filter((t) => t.id !== id),
  })),
  on(loadTodosSuccess, (state, { todoList }) => ({
    ...state,
    todoList: [...todoList],
  }))
);
