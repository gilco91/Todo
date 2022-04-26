import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {


  private mock: ITodo[]=[{"title":"Bulbul, black-fronted","description":"Pycnonotus nigricans","isCompleted":false,"isArchived":false,"endDate":"8/7/2021"},
  {"title":"Vulture, lappet-faced","description":"Aegypius tracheliotus","isCompleted":false,"isArchived":true,"endDate":"7/26/2021"},
  {"title":"Burmese black mountain tortoise","description":"Manouria emys","isCompleted":false,"isArchived":false,"endDate":"8/26/2021"},
  {"title":"Hoopoe, eurasian","description":"Upupa epops","isCompleted":false,"isArchived":false,"endDate":"4/6/2022"},
  {"title":"Skink, african","description":"Mabuya spilogaster","isCompleted":false,"isArchived":true,"endDate":"5/24/2021"},
  {"title":"Bird, black-throated butcher","description":"Cracticus nigroagularis","isCompleted":false,"isArchived":true,"endDate":"12/14/2021"},
  {"title":"White-throated kingfisher","description":"Halcyon smyrnesis","isCompleted":false,"isArchived":false,"endDate":"5/12/2021"},
  {"title":"White rhinoceros","description":"Ceratotherium simum","isCompleted":true,"isArchived":true,"endDate":"1/8/2022"}];


  private _todoSubject:BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);


  constructor() { }

  public getTodos(): Observable<Array<ITodo>>{
    return this._todoSubject.asObservable();
  }
}
