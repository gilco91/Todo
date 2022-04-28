import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ITodo } from 'src/app/models/todo.interface';
import {MatDialog} from '@angular/material/dialog';
import { TodoService } from 'src/app/services/todo.service';
import {v4 as uuidv4} from 'uuid';

@Component({
  selector: 'app-new-todo',
  templateUrl: './new-todo.component.html',
  styleUrls: ['./new-todo.component.scss']
})
export class NewTodoComponent implements OnInit {

  @ViewChild("f") form: NgForm;

  public minDate: Date = new Date();


  constructor(public diaglog:MatDialog,private todoService:TodoService) { }

  ngOnInit(): void {}

  public onNewTodoSubmit():void{
    //create the new todo object
    //send object to service
    if(this.form.valid){
      const formValues=this.form.form.value;
      const newtodo:ITodo={
        id: uuidv4(),
        title: formValues.title,
        description: formValues.description,
        endDate: formValues.date,
        isArchived: formValues.isArchived,
        isCompleted:false,
        selected:false
      }
      this.todoService.addNewTodo(newtodo)
      this.diaglog.closeAll();
    }
  }
}
