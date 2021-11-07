import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { Todo } from 'src/app/todo/todo.model';

export const todoAdapter: EntityAdapter<Todo> = createEntityAdapter<Todo>();

export interface TodoState extends EntityState<Todo> {}
export const initialTodoState: TodoState = todoAdapter.getInitialState();
