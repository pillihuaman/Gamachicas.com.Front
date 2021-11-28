import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Perfil } from '../schema/perfil';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthLoginService } from '../../main/pages/authentication/auth-login/auth-login.service';
import { CODIGO_PARAMETRO_PERIODO, CODIGO_PARAMETRO_ESTADO, CODIGO_PARAMETRO_OPERADORES, CODIGO_PARAMETRO_TSECTOR } from '../../data/utils/Constantes';
import { Permisos } from '../schema/permisos';

@Injectable({
    providedIn: 'root'
})

export class PermisosService {

    urlEndpointPermisos = `${environment.apiUrl}/nivelmadurez/permisos`;
    urlEndpointPerfil = `${environment.apiUrl}/nivelmadurez/perfil`;
    urlEndpointPermisosSeguridad = `${environment.apiUrl}/nivelmadurez/security`;
    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    registrarPermiso(permiso: Permisos): Observable<any> {
        return this.httpClient.post(this.urlEndpointPermisos + '/registrarPermisos', permiso, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
            console.error('Error al intentar registrar la nueva permiso. Msg: ' + e.error);
            if (Swal.isLoading()) {
                Swal.close();
            }
            Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
            return throwError(e);
        })
        );
    }

    actualizarPermiso(permiso: Permisos): Observable<any> {
        return this.httpClient.post(this.urlEndpointPermisos + '/actualizarpermiso', permiso, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
            console.error('Error al intentar registrar la nueva permiso. Msg: ' + e.error);
            if (Swal.isLoading()) {
                Swal.close();
            }
            Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
            return throwError(e);
        })
        );
    }

    listarPermiso(permiso: Permisos): Observable<any> {
        return this.httpClient.get(this.urlEndpointPermisos + '/listarpermiso/' + permiso.idPerfil, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar las perfil. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }


    eliminarPermiso(permiso: Permisos): Observable<any> {
        return this.httpClient.post(this.urlEndpointPermisos + '/anularpermiso', permiso, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar eliminar permiso. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    listarPerfil(perfil: Perfil): Observable<any> {
        return this.httpClient.get(this.urlEndpointPerfil + '/listarPerfil/' + perfil.idPerfil + '/' + perfil.idEstado, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar las perfil. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    listarDatosPermiso(perfil: Perfil): Observable<any> {
        return this.httpClient.get(this.urlEndpointPermisosSeguridad + '/listarDatosPermiso/' + perfil.idPerfil, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar las perfil. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

}
