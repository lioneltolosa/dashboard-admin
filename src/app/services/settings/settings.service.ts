import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  peoples: any = {
    name: 'Lionel',
    lastName: 'Tolosa',
    phone : 603444769
  };

  constructor(@Inject(DOCUMENT) private _document: Document) { // DEPRECATE
    this.cargarAjustes();
  }

  guardarAjustes() {
    // console.log('Guardado en el LocalStorage');
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes ));
  }

  cargarAjustes() {
    if ( localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      // console.log('Cargando de Ajustes');
      this.aplicarTema ( this.ajustes.tema);
    } else {
      this.aplicarTema ( this.ajustes.tema);
      // console.log('Usando valores por defecto');
    }
  }

  aplicarTema (tema: string) {
    const url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('theme').setAttribute('href', url );

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }

  ejemploLocalStorage() {
    console.log('ejemploLocalStorage' + ' ' + localStorage.getItem('name'));
    localStorage.setItem( 'name', 'Lionel Tolosa Armas');

    console.log('Ejemplo usando JsonStringifi' + ' ' + localStorage.getItem('peoples'));
    localStorage.setItem ( 'peoples', JSON.stringify(this.peoples));
  }

  cargarEjemploLocalStorage() {
    if ( localStorage.getItem('peoples')) {
      this.peoples = JSON.parse(localStorage.getItem('peoples'));
    }
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}

interface Peoples {
  name: string;
  lastName: string;
  phone: number;
}
