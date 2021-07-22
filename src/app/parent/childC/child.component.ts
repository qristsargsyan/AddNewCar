import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ICar } from '../Interface/ICar';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() car!:ICar

  @Output() carEmit: EventEmitter<ICar> = new EventEmitter<ICar>();

  carNewData:ICar={
    make:"opel",
    color:"black",
    year:"2010",
    door:"4"
  
  }

  mycarEmit(){
    this.carEmit.emit(this.carNewData);
  }

}
