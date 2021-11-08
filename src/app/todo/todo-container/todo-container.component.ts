import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';
import {
  listAddButtonClicked,
  deleteTodoButtonClicked,
  loadTodosOverview,
} from 'src/app/state/todo/todo.actions';
import {
  isTodoListLoading,
  selectNumberOfTodos,
  selectTodos,
} from 'src/app/state/todo/todo.selectors';

@Component({
  selector: 'todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
})
export class TodoContainerComponent {
  todos$ = this.store.select(selectTodos);
  numberOfTodos$ = this.store.select(selectNumberOfTodos);
  isTodoListLoading$ = this.store.select(isTodoListLoading);

  constructor(private store: Store) {
    this.store.dispatch(loadTodosOverview());
  }

  onAddTodo(title: string) {
    this.store.dispatch(listAddButtonClicked({ title }));
  }

  onDeleteTodo(id: string) {
    this.store.dispatch(deleteTodoButtonClicked({ id }));
  }
}
