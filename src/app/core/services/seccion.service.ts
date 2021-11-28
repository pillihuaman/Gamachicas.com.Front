import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpBackend, HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Seccion} from '../schema/seccion';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {AuthLoginService} from '../../main/pages/authentication/auth-login/auth-login.service';
import {RUTA_IP_ENPOINT} from '../../data/utils/Constantes';

@Injectable({
    providedIn: 'root'
})

export class SeccionService {

    urlEndpointSeccion = `${environment.apiUrl}/nivelmadurez/seccion`;
    urlEndpointSistemaIntegracion = `${environment.apiUrl}/nivelmadurez/sistemaintegracion`;
    urlEndpointParametro = `${environment.apiUrl}/nivelmadurez/parametros`;
    listaSecciones: string;
    listaSistemaIntegracion: string;
    private customHttpClient: HttpClient;

    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService, private noInterceptorEndpoint: HttpBackend) {
        this.customHttpClient = new HttpClient(noInterceptorEndpoint);
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    obtenerListaSecciones(ideSistema): Observable<any> {
        return this.httpClient.get(this.urlEndpointSeccion + '/listarSecciones/' + ideSistema, {}).pipe(
            catchError(e => {
                console.error('Error al intentar listar las secciones. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaSistemaIntegracion(): Observable<any> {
        console.log('obtenerSistemas de seccion service: ' + this.urlEndpointSistemaIntegracion + '/listarSistemaIntegracion/');
        return this.httpClient.get(this.urlEndpointSistemaIntegracion + '/listarSistemaIntegracion/', {}).pipe(
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

    obtenerNombreCorrelativoSeccion(nombreTabla: string, idSistema: number): Observable<any> {
        return this.httpClient.get(this.urlEndpointParametro + '/generarCodigoTabla/' + nombreTabla + '/' + idSistema, {}).pipe(
            catchError(e => {
                console.error('Error al intentar obtener el id de la sección correlativa Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    filtrarSeccion(idSeccion): Observable<any> {
        console.log('obtenerCliente de seccion service: ' + this.urlEndpointSeccion + '/obtenerSeccion/' + idSeccion);
        return this.httpClient.get(this.urlEndpointSeccion + '/obtenerSeccion/' + idSeccion, {}).pipe(
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

    obtenerDireccionIP(): Observable<any> {
        return this.customHttpClient.get(RUTA_IP_ENPOINT, {headers: null}).pipe(
            catchError(e => {
                console.error('Error al intentar obtener la direccion ip. Msg: ' + e.error);
                return throwError(e);
            })
        );
    }

    guardarListaSecciones(listaSecciones: string): void {
        this.listaSecciones = listaSecciones;
        sessionStorage.setItem('listaSecciones', this.listaSecciones);
    }

    actualizarSeccion(seccion: Seccion): Observable<any> {
        return this.httpClient.put(this.urlEndpointSeccion + '/actualizarSeccion', seccion, {}).pipe(
            catchError(e => {
                console.error('Error al intentar actualizar la sección. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    registrarNuevaSeccion(seccionBody: Seccion): Observable<any> {
        return this.httpClient.post(this.urlEndpointSeccion + '/registrarSeccion', seccionBody, {}).pipe(catchError(e => {
                console.error('Error al intentar registrar la nueva sección. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    /* Se utilizará httpPost para enviar el cuerpo al delete */
    eliminarSeccion(seccionBodyEliminar: Seccion): Observable<any> {
        return this.httpClient.post(this.urlEndpointSeccion + '/anularSeccion', seccionBodyEliminar, {}).pipe(
            catchError(e => {
                console.error('Error al intentar eliminar la sección. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }
}
