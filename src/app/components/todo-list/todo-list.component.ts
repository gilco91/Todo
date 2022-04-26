import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ITodo } from 'src/app/models/todo.interface';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit ,OnDestroy{

  public todos: Array<ITodo> = [];


  //קודם עושים אנסבסקרייב לפני שעושים סאבסקירב ואת זה עושים בדסטרויי
  private subscription: Subscription = new Subscription();

  constructor(private todoService: TodoService) { 

  }     

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
    this.subscription.add(
        this.todoService.getTodos().subscribe(data => {
          this.todos = data;
        })
    );
  }

}
