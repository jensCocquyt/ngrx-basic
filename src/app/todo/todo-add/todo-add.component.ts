import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'todo-add',
  templateUrl: './todo-add.component.html',
  styleUrls: ['./todo-add.component.scss'],
})
export class TodoAddComponent {
  @Output() addTodo = new EventEmitter<string>();
  constructor() {}

  generate(): void {
    this.addTodo.emit(this.getRandomTitle());
  }

  private getRandomTitle(): string {
    return this.randomTitles[
      Math.floor(Math.random() * this.randomTitles.length || 0)
    ];
  }
  private randomTitles = [
    'lorem ipsum',
    'sit amet',
    'consectetur adipiscing',
    'Suspendisse adi',
    'iaculis quam',
    'diam varius',
    'sed tempus',
    'pharetra Donec',
    'vitae sodales',
  ];
}
