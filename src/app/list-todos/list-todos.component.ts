import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {

  todos = [
    new Todo(1, 'Learn to dance', false, new Date()),
    new Todo(1, 'Play Games', false, new Date()),
    new Todo(1, 'Do shopping', false, new Date()),
    new Todo(1, 'Go market', false, new Date()),
    new Todo(1, 'Do Exercise', false, new Date()),
  ];
}

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}
