import { NgModule } from '@angular/core';

import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.module';

import { PagesComponent } from './pages.component';

import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { IncrementComponent } from '../components/increment/increment.component';




@NgModule({
    declarations: [
        PagesComponent,
        DashboardComponent,
        ProgressComponent,
        Graficas1Component,
        IncrementComponent
    ],
    exports: [
        DashboardComponent,
        ProgressComponent,
        Graficas1Component
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]

})
export class PageModule { }
