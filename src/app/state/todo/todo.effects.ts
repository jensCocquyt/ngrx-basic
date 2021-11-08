import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, EMPTY, map, mergeMap } from 'rxjs';
import { Todo } from 'src/app/todo/todo.model';
import {
  listAddButtonClicked,
  listAddButtonClickedSuccess,
  deleteTodoButtonClicked,
  deleteTodoButtonClickedSuccess,
  loadTodosOverview,
  loadTodosOverviewSuccess,
} from './todo.actions';
import { TodoService } from './todo.service';

@Injectable()
export class TodoEffects {
  loadTodosOverview$ = createEffect(() =>
    this.actions$.pipe(
      ofType(loadTodosOverview),
      mergeMap(() =>
        this.todoService
          .getAll()
          .pipe(
            map((todoList: Todo[]) => loadTodosOverviewSuccess({ todoList }))
          )
      )
    )
  );

  listAddButtonClicked$ = createEffect(() =>
    this.actions$.pipe(
      ofType(listAddButtonClicked),
      mergeMap((action) =>
        this.todoService
          .addTodo(action.title)
          .pipe(map((todo: Todo) => listAddButtonClickedSuccess({ todo })))
      )
    )
  );

  deleteTodoButtonClicked$ = createEffect(() =>
    this.actions$.pipe(
      ofType(deleteTodoButtonClicked),
      mergeMap((action) =>
        this.todoService
          .deleteTodo(action.id)
          .pipe(map((id) => deleteTodoButtonClickedSuccess({ id })))
      )
    )
  );

  constructor(private actions$: Actions, private todoService: TodoService) {}
}
