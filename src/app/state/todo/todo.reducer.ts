import { createReducer, on } from '@ngrx/store';
import { Todo } from 'src/app/todo/todo.model';
import { addTodo, deleteTodo } from './todo.actions';
import { initialTodoState } from './todo.state';

export const todoReducer = createReducer(
  initialTodoState,

  on(addTodo, (state, { title }) => ({
    ...state,
    todoList: [...state.todoList, new Todo(title)],
  })),
  on(deleteTodo, (state, { id }) => ({
    ...state,
    todoList: state.todoList.filter((t) => t.id !== id),
  }))
);
