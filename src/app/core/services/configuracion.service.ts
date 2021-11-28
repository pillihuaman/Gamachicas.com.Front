import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { Perfil } from '../schema/perfil';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthLoginService } from '../../main/pages/authentication/auth-login/auth-login.service';
import { CODIGO_PARAMETRO_PERIODO, CODIGO_PARAMETRO_ESTADO, CODIGO_PARAMETRO_OPERADORES, CODIGO_PARAMETRO_TSECTOR } from '../../data/utils/Constantes';
import { Configuracion } from '../schema/configuracion';
import { ConfiguracionDetalle } from '../schema/configuracionDetalle';
@Injectable({
    providedIn: 'root'
})

export class ConfiguracionService {

    urlEndpointConfiguracions = `${environment.apiUrl}/nivelmadurez/parametros`;
    urlEndpointSistema = `${environment.apiUrl}/nivelmadurez/sistemaintegracion`;
    urlEndpointcuestionarios = `${environment.apiUrl}/nivelmadurez/cuestionario`;
    urlEndpointConfiguracionsdetalle = `${environment.apiUrl}/nivelmadurez/detalleparametros`;

    urlEndpointsecurity = `${environment.apiUrl}/nivelmadurez/security`;
    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    registrarConfiguracion(configuracion: Configuracion): Observable<any> {
        return this.httpClient.post(this.urlEndpointConfiguracions + '/registrarParametro', configuracion, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
            console.error('Error al intentar registrar la nueva Configuracion. Msg: ' + e.error);
            if (Swal.isLoading()) {
                Swal.close();
            }
            Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
            return throwError(e);
        })
        );
    }

    actualizarConfiguracion(Configuracion: Configuracion): Observable<any> {
        return this.httpClient.post(this.urlEndpointConfiguracions + '/actualizarParametro', Configuracion, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
            console.error('Error al intentar registrar la nueva Configuracion. Msg: ' + e.error);
            if (Swal.isLoading()) {
                Swal.close();
            }
            Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
            return throwError(e);
        })
        );
    }

    listarConfiguracion(Configuracion: Configuracion): Observable<any> {
        return this.httpClient.get(this.urlEndpointConfiguracions + '/listaBandejaParametro/' + Configuracion.IDPARAMETRO + '/' + parseInt(Configuracion.INBAJA), {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    listarConfiguradetalle(Configuracion: Configuracion): Observable<any> {
        return this.httpClient.get(this.urlEndpointConfiguracions + '/listaBandejaParametro/' + Configuracion.IDPARAMETRO + '/' + parseInt(Configuracion.INBAJA), {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }


    listarEstado(): Observable<any> {
        return this.httpClient.get(this.urlEndpointConfiguracions + '/listarParametrosxCodigo/' + 'EPO0000', {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar la. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }


    listarSistemas(): Observable<any> {
        return this.httpClient.get(this.urlEndpointSistema + '/listarSistemaIntegracion/' + 0 + '/' + 1, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar la. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    listaEstadoAutoevaluacion(): Observable<any> {
        return this.httpClient.get(this.urlEndpointcuestionarios + '/listadoEstadoEncuesta/' + 0, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar la. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }


    validarCodigoButton(codigoBtn: string): Observable<any> {
        return this.httpClient.get(this.urlEndpointsecurity + '/validarCodigoButton/' + codigoBtn, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar la. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    listaEstadoNotificacion(): Observable<any> {
        return this.httpClient.get(this.urlEndpointcuestionarios + '/listadoEstadoEncuesta/' + 0, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar la. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }



    eliminarConfiguracion(Configuracion: Configuracion): Observable<any> {
        return this.httpClient.post(this.urlEndpointConfiguracions + '/anularParametro', Configuracion, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar eliminar Configuracion. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    grabarConfiguracion(configuracionDetalle: ConfiguracionDetalle): Observable<any> {

        console.log('lista asignacion clase : ' + JSON.stringify(configuracionDetalle));
        return this.httpClient.post(this.urlEndpointConfiguracions + '/registrarDetalleParametro', configuracionDetalle, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
            console.error('Error al intentar registrar la nueva Configuracion. Msg: ' + e.error);
            if (Swal.isLoading()) {
                Swal.close();
            }
            Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
            return throwError(e);
        })
        );
    }

    ActualizarConfiguracion(configuracionDetalle: ConfiguracionDetalle): Observable<any> {

        console.log('lista asignacion clase : ' + JSON.stringify(configuracionDetalle));
        return this.httpClient.post(this.urlEndpointConfiguracions + '/actualizarDetalleParametro', configuracionDetalle, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
            console.error('Error al intentar registrar la nueva Configuracion. Msg: ' + e.error);
            if (Swal.isLoading()) {
                Swal.close();
            }
            Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
            return throwError(e);
        })
        );
    }

    listarDetalleBandeja(): Observable<any> {
        return this.httpClient.get(this.urlEndpointConfiguracions + '/listaBandejaDetalleParametro/' + 0 + '/' + 0 + '/' + 1, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar la. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    listarConfiguracionDetalle(): Observable<any> {
        return this.httpClient.get(this.urlEndpointConfiguracions + '/listaBandejaDetalleParametro/' + 0 + '/' + 0 + '/' + 1, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar la. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }
    anularDetalleParametro(configuracionDetalle: ConfiguracionDetalle): Observable<any> {
        return this.httpClient.post(this.urlEndpointConfiguracions + '/anularDetalleParametro', configuracionDetalle, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
            console.error('Error al intentar registrar la nueva Configuracion. Msg: ' + e.error);
            if (Swal.isLoading()) {
                Swal.close();
            }
            Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
            return throwError(e);
        })
        );

    }

    listarBandejaDetalleParametro(idParametro: number, idDetalleParametro: number, idEstado: number): Observable<any> {
        return this.httpClient.get(this.urlEndpointConfiguracions + '/listaBandejaDetalleParametro/' + idParametro + '/' + idDetalleParametro + '/' + idEstado, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar la. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }
}
