import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  private mock: ITodo[]=[{"id":1,"title":"Bulbul, black-fronted","description":"Pycnonotus nigricans","isCompleted":false,"isArchived":false,"endDate":"8/7/2021","selected":true},
  {"id":2,"title":"Vulture, lappet-faced","description":"Aegypius tracheliotus","isCompleted":false,"isArchived":false,"endDate":"7/26/2021","selected":false},
  {"id":3,"title":"Burmese black mountain tortoise","description":"Manouria emys","isCompleted":false,"isArchived":false,"endDate":"8/26/2021","selected":false},
  {"id":4,"title":"Hoopoe, eurasian","description":"Upupa epops","isCompleted":false,"isArchived":false,"endDate":"4/6/2022","selected":false},
  {"id":5,"title":"Skink, african","description":"Mabuya spilogaster","isCompleted":false,"isArchived":false,"endDate":"5/24/2021","selected":false},
  {"id":6,"title":"Bird, black-throated butcher","description":"Cracticus nigroagularis","isCompleted":false,"isArchived":false,"endDate":"12/14/2021","selected":false},
  {"id":7,"title":"White-throated kingfisher","description":"Halcyon smyrnesis","isCompleted":false,"isArchived":false,"endDate":"5/12/2021","selected":false},
  {"id":8,"title":"White rhinoceros","description":"Ceratotherium simum","isCompleted":false,"isArchived":false,"endDate":"1/8/2022","selected":false}];


  private _todoSubject:BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.mock[0]);

  constructor() { }

  public getTodos(): Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();
  }
  public getSelectedTodo(): Observable<ITodo>{
    return this._singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo){
      this._singleTodoSubject.next(todo);
  }
}
