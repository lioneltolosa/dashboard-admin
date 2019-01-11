import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  // @Input('ejemplo') leyenda: string = 'Leyenda'; // Se puede remobrar el imput

  constructor() {
    console.log('Leyenda', this.leyenda);
    console.log('porcentaje', this.porcentaje);
   }

  ngOnInit() {
  }

  increase( valor: number ) {
    if ( this.porcentaje >= 100 && valor > 0 ) {
      this.porcentaje = 100;
      return;
    }

    if ( this.porcentaje <= 0 && valor < 0) {
      this.porcentaje = 0;
      return;
    }

    this.porcentaje = this.porcentaje + valor;

    this.changeValue.emit( this.porcentaje);
  }

}
