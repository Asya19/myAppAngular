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

  carSelect(carName:string) {
    if (carName == 'bmw') {
      this.name = 'BMW';
      this.speed = 280;
      this.model = 'M5';
      this.colors = {
        car: 'Синий',
        salon: 'Красный',
        wheels: 'Жёлтые'
    };
    this.options = ['ABS', 'Автопилот', 'Авто Паркинг']
    } else if (carName == 'merc') {
      this.name = 'Mercedes';
      this.speed = 180;
      this.model = 'C180';
      this.colors = {
        car: 'Синий',
        salon: 'Красный',
        wheels: 'Жёлтые'
      };
      this.options = ['ABS', 'Автопилот', 'Авто Паркинг']

    } else {
      this.name = 'Audi';
      this.speed = 265;
      this.model = 'RS8';
      this.colors = {
        car: 'Синий',
        salon: 'Красный',
        wheels: 'Жёлтые'
    };
    this.options = ['ABS', 'Автопилот', 'Авто Паркинг']
    }
  }

  addOpt(opt:string) {
    this.options.unshift(opt);
    return false;
  }

  deleteOpt(opt:string) {
  for (let i = 0; i < this.options.length; i++) {
    if (this.options[i] == opt) {
      this.options.splice(i, 1);
      break;
    }

  }
  }

}

interface Colors {
  car:string;
  salon:string;
  wheels:string;
}
