import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'todo-header',
  templateUrl: './todo-header.component.html',
  styleUrls: ['./todo-header.component.scss'],
})
export class TodoHeaderComponent {
  @Input() numberOfTodos: number | null;
}
