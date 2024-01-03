import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  delMessage = '';

  constructor(
    private toDoService: TodoDataService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.refreshTodos();
  }

  refreshTodos() {
    this.toDoService.retrieveAllTodos('jitendra').subscribe(response => {
      console.log(response);
      this.todos = response;
    })
  }

  deleteTodo(id: number) {
    console.log(`Deleted id : ${id}`);
    this.toDoService.deleteTodo('jitendra', id).subscribe(
      response => {
        console.log(response);
        this.delMessage = `Delete of ${id} successfull`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id: number) {
    this.router.navigate(['todos', id]); 
  }

  addTodo() {
    this.router.navigate(['todos', -1]);
  }

  todos: Todo[] =[];
  // = [
  //   new Todo(1, 'Learn to dance', false, new Date()),
  //   new Todo(1, 'Play Games', false, new Date()),
  //   new Todo(1, 'Do shopping', false, new Date()),
  //   new Todo(1, 'Go market', false, new Date()),
  //   new Todo(1, 'Do Exercise', false, new Date()),
  // ];
}

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ){}
}
