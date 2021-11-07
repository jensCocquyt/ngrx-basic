import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/todo/todo.model';
import {
  addTodoSuccess,
  deleteTodoSuccess,
  loadTodosSuccess,
} from './todo.actions';
import { initialTodoState, todoAdapter } from './todo.state';

export const todoReducer = createReducer(
  initialTodoState,

  on(addTodoSuccess, (state, { todo }) =>
    todoAdapter.addMany([todo, todo], state)
  ),
  on(deleteTodoSuccess, (state, { id }) => todoAdapter.removeOne(id, state)),
  on(loadTodosSuccess, (state, { todoList }) =>
    todoAdapter.setAll(todoList, state)
  )
);
