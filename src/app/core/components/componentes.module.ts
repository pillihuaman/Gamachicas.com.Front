import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentesRoutingModule } from './componentes-routing.module';
import { ButtonComponent } from './button/button.component';
import { ButtonModule } from 'primeng/button';
import {RippleModule} from "primeng/ripple";
const COMPONENTS = [
  ButtonComponent

];

@NgModule({
    imports: [
        CommonModule,
        ComponentesRoutingModule, ButtonModule, RippleModule
    ],
  declarations: [...COMPONENTS],
  exports: [...COMPONENTS],
})
export class ComponentesModule { }
