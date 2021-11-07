import { Injectable } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Todo } from 'src/app/todo/todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  constructor() {}

  getAll(): Observable<Todo[]> {
    return of([new Todo('Groceries'), new Todo('Dentist')]).pipe(delay(500));
  }

  addTodo(title: string): Observable<Todo> {
    return of(new Todo(title)).pipe(delay(500));
  }

  deleteTodo(id: string): Observable<string> {
    return of(id).pipe(delay(500));
  }
}
