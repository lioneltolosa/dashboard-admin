import { Component, OnInit, Inject  } from '@angular/core';
import { DOCUMENT } from '@angular/platform-browser';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styleUrls: ['./account-settings.component.css']
})
export class AccountSettingsComponent implements OnInit {

  constructor(@Inject(DOCUMENT) private _document: Document ) { }

  ngOnInit() {
  }

  changeColor( theme: string, link: any) {
    console.log(link);

    this.aplicarCheck( link );

    const url = `assets/css/colors/${ theme }.css`;
    this._document.getElementById('theme').setAttribute('href', url );
  }

  aplicarCheck( link: any) {
    const selectores: any = document.getElementsByClassName('selector');

    for ( const ref of selectores ) {
      ref.classList.remove('working');
    }

      link.classList.add ('working');
  }

}
