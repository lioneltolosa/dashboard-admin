// import { NgModule } from '@angular/core';

// import { Routes, RouterModule } from '@angular/router';

// import { LoginComponent } from './login/login.component';
// import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';
// import { RegisterComponent } from './login/register.component';

// const appRoutes: Routes = [
//   { path: 'login', component: LoginComponent},
//   { path: 'register', component: RegisterComponent},
//   { path: '**', component: NopagefoundComponent}
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(appRoutes, { useHash: true })],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }

import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from './pages/pages.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagefoundComponent } from './shared/nopagefound/nopagefound.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: '**', component: NopagefoundComponent }
];


export const APP_ROUTES = RouterModule.forRoot( appRoutes, { useHash: true } );
