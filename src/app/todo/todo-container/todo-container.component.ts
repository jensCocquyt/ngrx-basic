import { Component } from '@angular/core';
import { TodoFacade } from 'src/app/state/todo/todo.facade';

@Component({
  selector: 'todo-container',
  templateUrl: './todo-container.component.html',
  styleUrls: ['./todo-container.component.scss'],
})
export class TodoContainerComponent {
  todos$ = this.todoFacade.todos$;
  numberOfTodos$ = this.todoFacade.numberOfTodos$;
  constructor(private todoFacade: TodoFacade) {
    this.todoFacade.loadTodosOverview();
  }

  onAddTodo(title: string) {
    this.todoFacade.listAddButtonClicked(title);
  }

  onDeleteTodo(id: string) {
    this.todoFacade.deleteTodoButtonClicked(id);
  }
}
