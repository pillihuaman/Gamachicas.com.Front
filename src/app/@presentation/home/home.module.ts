import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';

import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbContextMenuModule,
  NbDatepickerModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbRadioModule,
  NbSelectModule,
  NbSidebarModule,
  NbToggleModule
} from '@nebular/theme';
import { CommonComponentModule } from '../@common-components/common-component.module';
import { UserRegisterComponent } from './user-register/user-register.component';
import { LoginComponent } from './login/login.component';


@NgModule({
  declarations: [
    HomeComponent,
    UserRegisterComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbContextMenuModule,
    NbDatepickerModule,
    NbFormFieldModule,
    NbIconModule,
    NbInputModule,
    NbLayoutModule,
    NbListModule,
    NbMenuModule,
    NbRadioModule,
    NbSelectModule,
    NbSidebarModule,
    NbToggleModule,
    CommonComponentModule
  ]
})
export class HomeModule { }
