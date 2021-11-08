import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  deleteTodoButtonClicked,
  listAddButtonClicked,
} from 'src/app/state/todo/todo.actions';
import {
  selectNumberOfTodos,
  selectTodos,
} from 'src/app/state/todo/todo.selectors';

@Component({
  selector: 'todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
})
export class TodoContainerComponent {
  constructor(private store: Store) {}
  todos$ = this.store.select(selectTodos);
  numberOfTodos$ = this.store.select(selectNumberOfTodos);

  onAddTodo(title: string) {
    this.store.dispatch(listAddButtonClicked({ title }));
  }

  onDeleteTodo(id: string) {
    this.store.dispatch(deleteTodoButtonClicked({ id }));
  }
}
