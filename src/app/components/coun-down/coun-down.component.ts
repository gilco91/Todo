
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-coun-down',
  templateUrl: './coun-down.component.html',
  styleUrls: ['./coun-down.component.scss']
})
export class CounDownComponent implements OnInit,OnDestroy {

  constructor() { }
  @Input() set dDay(dDay:Date){
    this._dDay=dDay;
  }

  private subscription:Subscription = new Subscription();
  private _dDay:Date;
  private millisecondsInSecond:number = 1000;
  private secondInMinute:number = 60;
  private minutesInHour:number= 60;
  private hoursInADay:number= 24;

  public timeDiff: number;
  public seconds: number;
  public minutes: number;
  public hours: number;
  public days: number;

  ngOnInit(): void {
    this.subscription.add(
      interval(1000).subscribe(() => {
        this.getTimeDiff();
      })
    );
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  private getTimeDiff():void{
    this.timeDiff=new Date(this._dDay).getTime() - new Date().getTime()//gives us millisecondes from 1970
    this.setTimeUnits(this.timeDiff);
  }
  private setTimeUnits(timeDiff:number):void{
    console.log(this._dDay)
    this.seconds=Math.floor(
      (timeDiff/this.millisecondsInSecond)%this.secondInMinute)//this calc return the secondes at the time

    this.minutes=Math.floor(
      (timeDiff/(this.millisecondsInSecond * this.minutesInHour))% this.minutesInHour);

    this.hours=Math.floor(
      (timeDiff/(this.millisecondsInSecond * this.minutesInHour * this.secondInMinute))% this.hoursInADay);

    this. days=Math.floor(
      timeDiff/(this.millisecondsInSecond * this.minutesInHour * this.secondInMinute * this.hoursInADay));
  }

}
