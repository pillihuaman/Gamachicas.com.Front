import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbFormFieldModule,
  NbIconModule,
  NbInputModule, NbListModule, NbPopoverModule,
  NbSelectModule,
  NbThemeModule,
  NbMenuModule,
  NbContextMenuModule
} from '@nebular/theme';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {
  MatPaginatorIntl,
  MatPaginatorModule,
} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatMenuModule } from '@angular/material/menu';
import { ServPillihuamanHeaderHomeComponent } from './serv-pillihuaman-header-home/serv-pillihuaman-header-home.component';
import { ServPillihuamanSidebarHomeComponent } from './serv-pillihuaman-sidebar-home/serv-pillihuaman-sidebar-home.component';
import { ServPillihuamanLeftMenuComponent } from './serv-pillihuaman-left-menu/serv-pillihuaman-left-menu.component'
import { RouterModule } from '@angular/router';
const COMPONENTS = [
  ServPillihuamanHeaderHomeComponent,
  ServPillihuamanSidebarHomeComponent,
  ServPillihuamanLeftMenuComponent
];
/*const DIRECTIVES = [

];
const PIPES = [

];
*/
const materialModules = [
  MatIconModule
];

@NgModule({

  declarations: [...COMPONENTS],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    MatCardModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    NbFormFieldModule,
    NbInputModule,
    NbThemeModule,
    MatRippleModule,
    MatAutocompleteModule,
    NbSelectModule,
    NbActionsModule,
    NbListModule,
    NbPopoverModule,
    FormsModule,
    ReactiveFormsModule,
    NbMenuModule,
    MatMenuModule,
    ...materialModules,
    NbContextMenuModule, MatIconModule, RouterModule
  ],
  exports: [...COMPONENTS,
  ...materialModules],
  entryComponents: [...COMPONENTS],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [{ provide: MatPaginatorIntl }],
})
export class CommonComponentModule { }
