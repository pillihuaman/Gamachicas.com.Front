import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Metodologia} from '../schema/metodologia';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {AuthLoginService} from '../../main/pages/authentication/auth-login/auth-login.service';
import {CODIGO_PARAMETRO_ESTADO, CODIGO_PARAMETRO_OPERADORES} from '../../data/utils/Constantes';

@Injectable({
    providedIn: 'root'
})

export class MetodologiaService {

    urlEndpointMetodologia = `${environment.apiUrl}/nivelmadurez/metodologia`;
    urlEndpointSistemaIntegracion = `${environment.apiUrl}/nivelmadurez/sistemaintegracion`;
    urlEndpointNivelMadurez = `${environment.apiUrl}/nivelmadurez`;
    urlEndpointPeriodoParametro = `${environment.apiUrl}/nivelmadurez/parametros`;
    listaMetodologias: string;
    listaSistemaIntegracion: string;
    listaNivelMadurez: string;


    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    obtenerListaMetodologias(ideSistema, ideNivelMadurez): Observable<any> {
        return this.httpClient.get(this.urlEndpointMetodologia + '/listarMetodologias/' + ideSistema + '/' + ideNivelMadurez, {}).pipe(
            catchError(e => {
                console.error('Error al intentar listar las metodologias. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaSistemaIntegracion(idSistema:number,idEstado:number): Observable<any> {
        return this.httpClient.get(this.urlEndpointSistemaIntegracion + '/listarSistemaIntegracion/' + idSistema + '/' + idEstado, {}).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos del sistema. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaNivelMadurez(): Observable<any> {
        return this.httpClient.get(this.urlEndpointNivelMadurez + '/listarNivelMadurez', {}).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos del nivel de madurez. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaOperadores(): Observable<any> {
        return this.httpClient.get(this.urlEndpointPeriodoParametro + '/listarParametrosxCodigo/' + CODIGO_PARAMETRO_OPERADORES, {}).pipe(
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

    filtrarMetodologia(idMetodologia): Observable<any> {

        return this.httpClient.get(this.urlEndpointMetodologia + '/obtenerMetodologia/' + idMetodologia, {}).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de la metodología. Msg: ' + e.error);
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
                    if (Swal.isLoading()) {
                        Swal.close();
                    }
                    Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                    return throwError(e);
                }
            )
        );
    }

    guardarListaNivelMadurez(listaNivelMadurez: string): void {
        this.listaNivelMadurez = listaNivelMadurez;
        sessionStorage.setItem('listaNivelMadurez', this.listaNivelMadurez);
    }

    actualizarMetodologia(metodologia: Metodologia): Observable<any> {
        return this.httpClient.put(this.urlEndpointMetodologia + '/actualizarMetodologia', metodologia, {}).pipe(
            catchError(e => {
                console.error('Error al intentar actualizar la metodologia. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    registrarNuevaMetodologia(metodologiaBody: Metodologia): Observable<any> {
        console.log('llleggg =>' + metodologiaBody);
        return this.httpClient.post(this.urlEndpointMetodologia + '/registrarMetodologia', metodologiaBody, {}).pipe(catchError(e => {
                console.error('Error al intentar registrar la nueva metodología. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    /* Se utilizará httpPost para enviar el cuerpo al delete */
    eliminarMetodologia(metodologiaBodyEliminar: Metodologia): Observable<any> {
        return this.httpClient.post(this.urlEndpointMetodologia + '/anularMetodologia', metodologiaBodyEliminar, {}).pipe(
            catchError(e => {
                console.error('Error al intentar eliminar la metodología. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }
}
