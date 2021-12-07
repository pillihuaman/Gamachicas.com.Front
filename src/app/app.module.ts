import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';


import { NbEvaIconsModule } from '@nebular/eva-icons';
import {
  NbDatepickerModule,
  NbDialogModule,
  NbMenuModule,
  NbSidebarModule,
  NbLayoutModule,
  NbThemeModule,
  NbToastrModule,
  NbWindowModule, NbInputModule, NbButtonModule
} from '@nebular/theme';
import { CommonComponentModule } from './@presentation/@common-components/common-component.module';
import { HomeModule } from './@presentation/home/home.module'
import { MatIconModule } from '@angular/material/icon';
import { EmpresaComponent } from './@presentation/pages/empresa/empresa.component';
import { PageModule } from './@presentation/pages/page.module';
import { CorporationsComponent } from './corporations/corporations.component';
import { HttpClientModule } from '@angular/common/http';
import { DomainModule } from './@domain/repository/domain.module';
@NgModule({
  declarations: [
    AppComponent,
    EmpresaComponent,
    CorporationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatMenuModule,
    NbThemeModule.forRoot({ name: 'default' }),
    NbLayoutModule,
    NbEvaIconsModule,
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbMenuModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbToastrModule.forRoot(),
    NbWindowModule.forRoot(),
    DomainModule.forRoot(),
    NbButtonModule,
    NbInputModule,
    CommonComponentModule, MatAutocompleteModule, MatSelectModule, MatFormFieldModule, HomeModule, MatIconModule, PageModule, HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
