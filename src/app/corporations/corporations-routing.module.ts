import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporationsComponent } from './corporations.component';
import { CreatorCompoinentComponent } from './creator-compoinent/creator-compoinent.component';
import { DynamicComponent } from './dynamic/dynamic.component';

const routes: Routes = [
  {
    path: 'creator',
    component: CorporationsComponent,
    children: [
      {
        path: 'dynamic',
        component: DynamicComponent
      },
      {
        path: 'newComponent',
        component: CreatorCompoinentComponent
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporationsRoutingModule { }
