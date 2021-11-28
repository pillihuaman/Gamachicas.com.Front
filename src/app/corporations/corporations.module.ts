import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporationsRoutingModule } from './corporations-routing.module';
import { DynamicComponent } from './dynamic/dynamic.component';
import { CreatorCompoinentComponent } from './creator-compoinent/creator-compoinent.component';


@NgModule({
  declarations: [
    DynamicComponent,
    CreatorCompoinentComponent
  ],
  imports: [
    CommonModule,
    CorporationsRoutingModule
  ]
})
export class CorporationsModule { }
