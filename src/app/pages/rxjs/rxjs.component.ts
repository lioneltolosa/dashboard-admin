import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent implements OnInit, OnDestroy {

  subscription: Subscription;

  // constructor() {
  //   this.returObservable().pipe(
  //     retry(2)
  //   ).subscribe(
  //     numero => console.log('Subs', numero),
  //     error => console.error('Error en el Observador', error),
  //     () => console.log('El Observador Termino')
  //   );
  // }

    constructor() {
    this.subscription = this.returObservable()
      .subscribe(
      numero => console.log('Subs', numero),
      error => console.error('Error en el Observador', error),
      () => console.log('El Observador Termino')
    );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('La pagina se va a cerrar');
    this.subscription.unsubscribe();
  }

  returObservable(): Observable<any> {
      return new Observable( (observer: Subscriber<any>) => {
    // return new Observable( observer => {

      let contador = 0;

      const intervalo = setInterval( () => {

      // contador += 1;
      contador ++;

      const salida = {     // Para que devuelva un Objeto
        valor: contador
      };
      observer.next( salida );


      // observer.next( contador ); //   Devuelve un Number



      // if ( contador === 3 ) {
      //   clearInterval( intervalo);
      //   observer.complete();
      // }



      // if ( contador === 2 ) {
      //   // clearInterval( intervalo);
      //   observer.error('Upsssss');
      // }

      // Normalmente el operador map se usa cuando ya tenemos una respuesta
      }, 1000 );
      // }).pipe( map ( (respuesta: any) => {
      //   return respuesta.valor;
      // })
      }).pipe(
         map ((resp: any) => resp.valor),
         // El operador filter tiene 2 parametros (valor, index)
         filter( ( valor, index) => {

          if ( (valor % 2) === 0 ) {
            // console.log('Par');
            return false;
          } else {
            // console.log('Impar');
            return true;
          }
          // console.log(valor, index);
          return true;
         })
    );

    // return ( obs );
  }

}
