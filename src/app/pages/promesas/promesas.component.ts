import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() {

    // const promesa = new Promise( (resolve, reject) => {

    //   let contador = 0;

    //   const intervalo = setInterval( () => {
    //     contador += 1;
    //     console.log(contador);

    //     if ( contador === 3) {
    //       // resolve('OK!');
    //       reject('Vamos todos a METAL HEART NOJOOODAAAA');
    //       clearInterval(intervalo);
    //     }

    //   }, 1000 );

    // });

    // promesa.then(
    //   () => console.log('Termino'),
    //   () => console.log('Error')
    // );







    // promesa.then(
    //   // () => console.log('Termino')
    //   mensaje => console.log('Termino' , mensaje)
    // )
    // .catch( error => console.error('Error', error));



    this.contarTres().then(
      // () => console.log('Termino')
      mensaje => console.log('Termino' , mensaje)
    )
    .catch( error => console.error('Error', error));
  }

  ngOnInit() {
  }

  contarTres(): Promise<boolean> {
    // const promesa: boolean = new Promise( (resolve, reject) => {
    return new Promise( (resolve, reject) => {

      let contador = 0;

      const intervalo = setInterval( () => {
        contador += 1;
        console.log(contador);

        if ( contador === 3) {
          // resolve('OK!');
          resolve( true );
          // reject('Vamos todos a METAL HEART NOJOOODAAAA');
          clearInterval(intervalo);
        }

      }, 1000 );

    });
    // return( promesa );
  }



}
