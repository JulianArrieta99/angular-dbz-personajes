import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
    <h3>Counter: {{counter}}</h3>

    <button (click)="increaseCounter(5)">+1</button>
    <button (click)="resetCounter()">Reset</button>
    <button (click)="decreaseCounter(3)">-1</button>

  `
})

export class CounterComponent {

  public counter: number = 10;

  public increaseCounter(value: number):void{
    this.counter+=value;
  }
  public decreaseCounter(value: number):void{
    this.counter-=value;
  }
  public resetCounter():void{
    this.counter=10;
  }
}
