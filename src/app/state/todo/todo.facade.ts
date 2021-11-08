import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  loadTodosOverview,
  listAddButtonClicked,
  deleteTodoButtonClicked,
} from './todo.actions';
import { selectTodos, selectNumberOfTodos } from './todo.selectors';

@Injectable({
  providedIn: 'root',
})
export class TodoFacade {
  todos$ = this.store.select(selectTodos);
  numberOfTodos$ = this.store.select(selectNumberOfTodos);

  constructor(private store: Store) {}

  loadTodosOverview() {
    this.store.dispatch(loadTodosOverview());
  }

  listAddButtonClicked(title: string) {
    this.store.dispatch(listAddButtonClicked({ title }));
  }

  deleteTodoButtonClicked(id: string) {
    this.store.dispatch(deleteTodoButtonClicked({ id }));
  }
}
