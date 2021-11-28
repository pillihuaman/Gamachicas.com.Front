import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Perfil } from '../schema/perfil';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthLoginService } from '../../main/pages/authentication/auth-login/auth-login.service';
import { CODIGO_PARAMETRO_PERIODO, CODIGO_PARAMETRO_ESTADO, CODIGO_PARAMETRO_OPERADORES, CODIGO_PARAMETRO_TSECTOR } from '../../data/utils/Constantes';
import { Usuario } from '../schema/usuario';
import { AlertService } from '../../data/services/alert.service';
import { Empresa } from '../schema/empresa';

@Injectable({
    providedIn: 'root'
})

export class UsuarioService {

    urlEndpointUsuario = `${environment.apiUrl}/nivelmadurez/security`;
    urlEndpointPeriodoParametro = `${environment.apiUrl}/nivelmadurez/parametros`;
    urlEndpointPerfil = `${environment.apiUrl}/nivelmadurez/perfil`;
    urlEndpointEmpresa = `${environment.apiUrl}/nivelmadurez/empresa`;
    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService, private alertService: AlertService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    registrarUsuario(usuario: Usuario): Observable<any> {
        return this.httpClient.post(this.urlEndpointUsuario + '/registrarUsuario', usuario, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
            console.error('Error al intentar registrar la nueva Usuario. Msg: ' + e.error);
            if (Swal.isLoading()) {
                Swal.close();
            }
            Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
            return throwError(e);
        })
        );
    }

    actualizarUsuario(usuario: Usuario): Observable<any> {
        return this.httpClient.post(this.urlEndpointUsuario + '/actualizarUsuario', usuario, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
            console.error('Error al intentar registrar la nueva usuario. Msg: ' + e.error);
            if (Swal.isLoading()) {
                Swal.close();
            }
            Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
            return throwError(e);
        })
        );
    }

    listarUsuario(usuario: Usuario): Observable<any> {
        return this.httpClient.get(this.urlEndpointUsuario + '/listarBandejaUsuario/' + usuario.idUsuario + '/' + usuario.idEmpresa + '/' + usuario.idEstado, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar las perfil. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }


    eliminarUsuario(usuario: Usuario): Observable<any> {
        return this.httpClient.post(this.urlEndpointUsuario + '/anularUsuario', usuario, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar eliminar usuario. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaEstadoParametros(): Observable<any> {
        return this.httpClient.get(this.urlEndpointPeriodoParametro + '/listarParametrosxCodigo/' + CODIGO_PARAMETRO_ESTADO, {}).pipe(
            catchError(
                e => {
                    console.error('Error al intentar listar los estados. Msg: ' + e.error);
                    this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                    return throwError(e);
                }

            )
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


    listarEmpresa(empresa: Empresa): Observable<any> {
        return this.httpClient.post(this.urlEndpointEmpresa + '/listarEmpresa/', empresa, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar las carteras. Msg: ' + e.error);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(e);
            })
        );
    }

    listarTipos(): Observable<any> {
        return this.httpClient.get(this.urlEndpointPeriodoParametro + '/listaTipoUsuario/').pipe(
            catchError(
                e => {
                    console.error('Error al intentar listar los estados. Msg: ' + e.error);
                    this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                    return throwError(e);
                }
            )
        );
    }

    listarCargo(usuario: Usuario): Observable<any> {
        return this.httpClient.get(this.urlEndpointUsuario + '/listarCargo/', {
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
