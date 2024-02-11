import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrl: './car.component.css'
})


// export - значит, все что будет в классе можно будет экспортировать, например в HTML
// Данный класс должен реализовывать метод OnInit
export class CarComponent implements OnInit {

  name:string;
  speed:number;
  model:string;
  colors:Colors;

  options:string[];



  constructor() { }

  ngOnInit(): void {
    this.name = 'BMW';
    this.speed = 235;
    this.model = 'RS8';
    this.colors = {
      car: 'Белый',
      salon: 'Чёрный',
      wheels: 'Зелёные'
    };
    this.options = ['ABS', 'Автопилот', 'Авто Паркинг']
  }


}
interface Colors {
  car:string;
  salon:string;
  wheels:string;
}
