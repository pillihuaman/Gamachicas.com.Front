import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './empresa/empresa.component';
import { PageComponent } from './page.component';
import { ProductDetailComponent } from './products/product-detail/product-detail.component';
import { ProductsComponent } from './products/products.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {
    path: '',
    component: PageComponent,
  },
  {
    path: 'product',
    children: [
      {
        path: 'register-product',
        component: ProductsComponent
      },
      {
        path: 'product-detail',
        component: ProductDetailComponent
      },


    ]
  },
  {
    path: 'user',
    children: [
      {
        path: 'register-user',
        component: UserRegisterComponent
      }



    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PageRoutingModule { }
