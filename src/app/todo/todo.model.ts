export class Todo {
  constructor(title: string) {
    this.id = Math.random().toString(36).replace('0.', '');
    this.title = title;
  }
  id: string;
  title: string;
}
