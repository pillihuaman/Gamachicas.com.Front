import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//import { NotauthGuard } from './@data/interceptors/notauth.guard';

const routes: Routes = [

  {
    path: '',
    loadChildren: () => import('./@presentation/home/home.module').then((m) => m.HomeModule),
    //canActivate: [NotauthGuard],
    //canLoad: [NotauthGuard]

  },
  {
    path: 'corporation',
    loadChildren: () => import('../app/corporations/corporations.module').then((m) => m.CorporationsModule),
    //canActivate: [NotauthGuard],
    //canLoad: [NotauthGuard]

  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
