import { Component, Output } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent {

  porcentaje1: number = 20;
  porcentaje2: number = 30;

  constructor() { }

}
