import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { Todo } from 'src/app/todo/todo.model';
import {
  addTodo,
  addTodoSuccess,
  deleteTodo,
  deleteTodoSuccess,
  loadTodos,
  loadTodosSuccess,
} from './todo.actions';
import { TodoService } from './todo.service';

@Injectable()
export class TodoEffects {
  loadTodos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodos),
      mergeMap(() =>
        this.todoService
          .getAll()
          .pipe(map((todoList: Todo[]) => loadTodosSuccess({ todoList })))
      )
    )
  );

  addTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(addTodo),
      mergeMap((action) =>
        this.todoService
          .addTodo(action.title)
          .pipe(map((todo: Todo) => addTodoSuccess({ todo })))
      )
    )
  );

  deleteTodo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodo),
      mergeMap((action) =>
        this.todoService
          .deleteTodo(action.id)
          .pipe(map((id) => deleteTodoSuccess({ id })))
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
