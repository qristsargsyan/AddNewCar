import { Component, OnInit } from '@angular/core';
import { ICar } from './Interface/ICar';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
cars:ICar[] = [];

  constructor() { }

  ngOnInit(): void {
  }
  carData:ICar ={
    make:"bmw",
    color:"blue",
    year:"2015",
    door:"4"
  }

  cleanDataAboutCar: ICar = {
    make:  '',
    color: '',
    year: '',
    door: '',
  }

  add(car:ICar){
    this.cars.push(car);
  }

  remove(element:any){   
    let index = this.cars.indexOf(element);
    this.cars.splice(index,1);
    }
}
