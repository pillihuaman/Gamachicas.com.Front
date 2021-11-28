import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';

const routes: Routes = [
  {
    path: 'pages',
    children: [
      {
        path: 'empresa',
        component: EmpresaComponent
      },


    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
