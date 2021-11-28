import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Perfil } from '../schema/perfil';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthLoginService } from '../../main/pages/authentication/auth-login/auth-login.service';
import { CODIGO_PARAMETRO_PERIODO, CODIGO_PARAMETRO_ESTADO, CODIGO_PARAMETRO_OPERADORES, CODIGO_PARAMETRO_TSECTOR } from '../../data/utils/Constantes';

@Injectable({
    providedIn: 'root'
})

export class PerfilService {

    urlEndpointPerfil = `${environment.apiUrl}/nivelmadurez/perfil`;


    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    registrarPerfil(perfil: Perfil): Observable<any> {
        return this.httpClient.post(this.urlEndpointPerfil + '/registrarPerfil', perfil, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
            console.error('Error al intentar registrar la nueva perfil. Msg: ' + e.error);
            if (Swal.isLoading()) {
                Swal.close();
            }
            Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
            return throwError(e);
        })
        );
    }

    actualizarPerfil(perfil: Perfil): Observable<any> {
        return this.httpClient.post(this.urlEndpointPerfil + '/actualizarPerfil', perfil, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
            console.error('Error al intentar registrar la nueva perfil. Msg: ' + e.error);
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


    eliminarPerfil(perfil: Perfil): Observable<any> {
        return this.httpClient.post(this.urlEndpointPerfil + '/anularPerfil', perfil, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar eliminar la Perfil. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

}
