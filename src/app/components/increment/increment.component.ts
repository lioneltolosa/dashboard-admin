import { Component, OnInit, Input, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-increment',
  templateUrl: './increment.component.html',
  styleUrls: ['./increment.component.css']
})
export class IncrementComponent implements OnInit {

  @ViewChild('txtProgress') txtProgress: ElementRef; // Aquest element recibe como parametro (Obligatoria) una referencia HTML
  // #ElementRef in the increment component HTML

  @Input() leyenda: string = 'Leyenda';
  @Input() porcentaje: number = 50;

  @Output() changeValue: EventEmitter<number> = new EventEmitter();

  // @Input('ejemplo') leyenda: string = 'Leyenda'; // Se puede remobrar el imput

  constructor() {
    // console.log('Leyenda', this.leyenda);
    // console.log('porcentaje', this.porcentaje);
   }

  ngOnInit() {
  }

  onChanges( newValue: number ) {
    // const elemHTML: any = document.getElementsByName('progreso');

    // console.log(this.txtProgress);

    if (newValue >= 100) {
      this.porcentaje = 100;
    } else if (newValue <= 0 ) {
      this.porcentaje = 0;
    } else {
      this.porcentaje = newValue;
    }

    // elemHTML.value = Number(this.porcentaje);
    this.txtProgress.nativeElement.value = this.porcentaje;

    this.changeValue.emit( this.porcentaje);

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

    this.txtProgress.nativeElement.focus();
  }

}
