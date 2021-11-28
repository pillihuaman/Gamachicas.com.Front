import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Clase} from '../schema/clase';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {AuthLoginService} from '../../main/pages/authentication/auth-login/auth-login.service';
import {CODIGO_PARAMETRO_ESTADO, CODIGO_PARAMETRO_PERIODO} from '../../data/utils/Constantes';
import {DetalleClase} from "../schema/detalleclase";

@Injectable({
    providedIn: 'root'
})

export class ClaseService {

    nameTabla = 'CLASE';
    urlEndpointGenerarCodigo = `${environment.apiUrl}/nivelmadurez/parametros`;
    urlEndpointComponente = `${environment.apiUrl}/nivelmadurez/componente`;
    urlEndpointSistemaIntegracion = `${environment.apiUrl}/nivelmadurez/sistemaintegracion`;
    urlEndpointGenerarBanco = `${environment.apiUrl}/nivelmadurez/preguntasistema`;
    urlEndpointClaseParametro = `${environment.apiUrl}/nivelmadurez/parametros`;
    urlEndpointClase = `${environment.apiUrl}/nivelmadurez/clase`;
    urlEndpointDetalleClase = `${environment.apiUrl}/nivelmadurez/detalleClase`;

    listaComponentes: string;

    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }


    registrarNuevaClase(claseBody: Clase): Observable<any> {
        return this.httpClient.post(this.urlEndpointClase + '/registrarClase', claseBody, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.error('Error al intentar registrar la nueva clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }


    obtenerListaClases(indicadorEstado): Observable<any> {
        return this.httpClient.get(this.urlEndpointClase + '/listarClases/'+ indicadorEstado, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar los clases. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }


    obtenerClase(idClase): Observable<any> {
        return this.httpClient.get(this.urlEndpointClase + '/obtenerClase/' + idClase, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de la clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }


    actualizarClase(clase: Clase): Observable<any> {
        return this.httpClient.put(this.urlEndpointClase + '/actualizarClase', clase, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar actualizar la clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }


    eliminarClase(claseBodyEliminar: Clase): Observable<any> {
        return this.httpClient.post(this.urlEndpointClase + '/anularClase', claseBodyEliminar, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar eliminar la clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }


    obtenerListaDetalleClases(idSistema, idClase): Observable<any> {
        return this.httpClient.get(this.urlEndpointDetalleClase + '/listarDetalleClase/' + idSistema + "/" + idClase, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar los detalles de clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    registrarNuevoDetalleClase(claseBody: DetalleClase): Observable<any> {
        return this.httpClient.post(this.urlEndpointDetalleClase + '/registrarDetalleClase', claseBody, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.error('Error al intentar registrar el nuevo detalle clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaEstadoParametros(): Observable<any> {
        return this.httpClient.get(this.urlEndpointClaseParametro + '/listarParametrosxCodigo/' + CODIGO_PARAMETRO_ESTADO, {}).pipe(
            catchError(e => {
                console.error('Error al intentar listar los tipos de periodos. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }


    obtenerDetalleClase(idDetalleClase): Observable<any> {
        return this.httpClient.get(this.urlEndpointDetalleClase + '/obtenerDetalleClase/' + idDetalleClase, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos del detalle clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }


    actualizarDetalleClase(Detalleclase: DetalleClase): Observable<any> {
        return this.httpClient.put(this.urlEndpointDetalleClase + '/actualizarDetalleClase', Detalleclase, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar actualizar el detalle clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }


    eliminarDetalleClase(claseBodyEliminar: DetalleClase): Observable<any> {
        return this.httpClient.post(this.urlEndpointDetalleClase + '/anularDetalleClase', claseBodyEliminar, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar eliminar la clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    listarSistemaIntegracion(idSistema:number,idEstado:number): Observable<any> {
        return this.httpClient.get(this.urlEndpointSistemaIntegracion + '/listarSistemaIntegracion/' + idSistema + '/' + idEstado, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de la seccion. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    //cambios generar codigo
    //inicio
    obtenerCodigoDetalleClase(idSistemaC, nameTabla): Observable<any> {
        return this.httpClient.get(this.urlEndpointGenerarCodigo + '/generarCodigoTabla/' + nameTabla + '/' + idSistemaC, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar los componentes. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    //fin


}
