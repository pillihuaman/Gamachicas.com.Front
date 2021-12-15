import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Const } from '../services/const';

@Injectable({
    providedIn: 'root'
})

export class AdminEntidadGuard implements CanActivate {

    constructor(
        public router: Router
    ) { }

    canActivate(): boolean {
        const rol = JSON.parse(localStorage.getItem('roles'));
        if (rol.rolId === Const.R_ADMIN_ENTIDAD) {
            return true;
        } else {
            this.router.navigate(['pages/home']);
            return false;
        }
    }
}
