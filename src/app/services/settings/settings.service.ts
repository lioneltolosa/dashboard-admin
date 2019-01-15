import { Injectable, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';
import { tick } from '@angular/core/src/render3';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  ajustes: Ajustes = {
    temaUrl: 'assets/css/colors/default.css',
    tema: 'default'
  };

  constructor(@Inject(DOCUMENT) private _document: Document) {
    this.cargarAjustes();
  }

  guardarAjustes() {
    console.log('Guardado en el LocalStorage');
    localStorage.setItem('ajustes', JSON.stringify( this.ajustes));
  }

  cargarAjustes() {
    if ( localStorage.getItem('ajustes')) {
      this.ajustes = JSON.parse(localStorage.getItem('ajustes'));
      console.log('Cargando de Ajustes');
      this.aplicarTema ( this.ajustes.tema);
    } else {
      this.aplicarTema ( this.ajustes.tema);
      console.log('Usando valores por defecto');
    }
  }

  aplicarTema (tema: string) {
    const url = `assets/css/colors/${ tema }.css`;
    this._document.getElementById('theme').setAttribute('href', url );

    this.ajustes.tema = tema;
    this.ajustes.temaUrl = url;

    this.guardarAjustes();
  }
}

interface Ajustes {
  temaUrl: string;
  tema: string;
}
