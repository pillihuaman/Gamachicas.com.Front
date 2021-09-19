import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeAppRoutingModule } from './home-app-routing.module';
import { HomeDetailComponent } from './home-detail/home-detail.component';


@NgModule({
  declarations: [
    HomeDetailComponent
  ],
  imports: [
    CommonModule,
    HomeAppRoutingModule
  ]
})
export class HomeAppModule { }
