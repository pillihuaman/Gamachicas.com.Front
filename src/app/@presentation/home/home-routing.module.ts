import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeAppComponent } from './home-app/home-app.component';
import { HomeComponent } from './home.component';
import { LoginComponent } from './login/login.component';
import { ProductsComponent } from './products/products.component';
import { UserRegisterComponent } from './user-register/user-register.component';

const routes: Routes = [
  {
    path: 'user',
    component: HomeComponent,
    children: [
      {
        path: 'user-register',
        component: UserRegisterComponent
      },
      {
        path: 'login',
        component: LoginComponent
      },
      {
        path: 'home-app',
        component: HomeAppComponent
      }

    ]
  },
  {
    path: 'product',
    component: ProductsComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
