import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { HomeAppComponent } from './home-app/home-app.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';

@NgModule({
  declarations: [
    HomeComponent,
    UserRegisterComponent,
    LoginComponent,
    HomeAppComponent,
    ProductsComponent,
    ProductDetailComponent

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
    CommonComponentModule,
    FormsModule,
    ReactiveFormsModule, MatInputModule, MatSelectModule, MatFormFieldModule, MatAutocompleteModule
  ],

})
export class HomeModule { }
