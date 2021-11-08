import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/todo/todo.model';
import { listAddButtonClicked, deleteTodoButtonClicked } from './todo.actions';
import { initialTodoState } from './todo.state';

export const todoReducer = createReducer(
  initialTodoState,

  on(listAddButtonClicked, (state, { title }) => ({
    ...state,
    todoList: [...state.todoList, new Todo(title)],
  })),
  on(deleteTodoButtonClicked, (state, { id }) => ({
    ...state,
    todoList: state.todoList.filter((t) => t.id !== id),
  }))
);
