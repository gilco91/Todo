import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private todos:Array<ITodo> = []

  private _todoSubject:BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.todos);

  private _singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.todos.length ? this.todos[0] : null );

  constructor() { }

  public getTodos(): Observable<Array<ITodo>>{
    if(!this._todoSubject.value.length){
      const todosString=localStorage.getItem("todos");
      if(todosString){
        //const exitingTodos=JSON.parse(todosSting);
        const exitingTodos: Array<ITodo> =JSON.parse(todosString);
        exitingTodos[0].selected=true;
        this._todoSubject.next(exitingTodos);
        this._singleTodoSubject.next(exitingTodos[0]);
      }
    }
    return this._todoSubject.asObservable();
  }
  public getSelectedTodo(): Observable<ITodo>{
    return this._singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo){
      this._singleTodoSubject.next(todo);
  }
  public addNewTodo(newtodo:ITodo):void{
      //take exiting todo
      //add new todo to exiting todos
      //trigger next tic in observable
      console.log(newtodo)
      const exitingTodos: Array<ITodo> = this._todoSubject.value;
      exitingTodos.push(newtodo);
      this._todoSubject.next(exitingTodos)
      localStorage.setItem("todos",JSON.stringify(exitingTodos))
  }
  public onTodoAction(todoId:string,action:string ):void{
    const exitingTodos:Array<ITodo> = this._todoSubject.value;

    const todoIndex=exitingTodos.findIndex(singleTodo => singleTodo.id == todoId);
    exitingTodos[todoIndex][action]=true;
    this._todoSubject.next(exitingTodos);
    localStorage.setItem('todos',JSON.stringify(exitingTodos));
  }
}
