import { Component, OnInit } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { User } from '../app/@data/model/User/user';
@Component({
  selector: 'serv-pillihuaman-app',
  template: `
    <nb-layout>

      <nb-layout-header fixed>
      <!-- Insert header here -->
      </nb-layout-header>

      <nb-layout-column>
    
        <router-outlet></router-outlet>
      
      </nb-layout-column>

      <nb-layout-footer fixed>
      <!-- Insert footer here -->
      </nb-layout-footer>

    </nb-layout>
  `,

})
export class AppComponent implements OnInit {
  nombreEmpresa = "Pillihuman Corporation app"
  estado: boolean = true;
  cantidadUsuario: number = 3;
  user: User;
  listaUsuario: Array<User> = [];
  everySecond$: Observable<number> = timer(0, 100);
  AppComponent() { }
  ngOnInit() {
    this.nombreEmpresa = "Gamachicas.com";
    this.user = { name: 'zarmir', lastName: 'pillihuaman', code: 1, estatus: false, password: '', documentoNumber: '46178209' };
    this.listaUsuario.push(this.user);
    console.log(this.listaUsuario);
    if (this.cantidadUsuario !== 1) {
      this.estado = false;
    }
  }
}
