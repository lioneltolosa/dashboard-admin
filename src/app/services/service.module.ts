import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsService } from './service.index';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    SettingsService,
    SidebarComponent,
    SharedModule
  ],
})
export class ServiceModule { }
