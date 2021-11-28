import {PreguntaSistema} from '../schema/preguntaSistema';
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {CODIGO_PARAMETRO_NUEMERO_PREGUNTA_PARAM} from '../../data/utils/Constantes';
import {AuthLoginService} from '../../main/pages/authentication/auth-login/auth-login.service';

@Injectable({
    providedIn: 'root'
})

export class ParametroService {

    urlEndpointSistemaIntegracion = `${environment.apiUrl}/nivelmadurez/sistemaintegracion`;
    urlEndpointPreguntaSistema = `${environment.apiUrl}/nivelmadurez/preguntasistema`;
    urlEndpointSector = `${environment.apiUrl}/nivelmadurez/sector`;
    urlEndpointNumeroParametro = `${environment.apiUrl}/nivelmadurez/parametros`;

    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    listarPreguntaSistema(idSistema: number, idPreguntaSistema: number): Observable<any> {
        return this.httpClient.get(this.urlEndpointPreguntaSistema + '/listarPreguntaSistema/' + idSistema + '/' + idPreguntaSistema, {}).pipe(
            catchError(e => {
                console.error('Error al intentar listar los parámetros. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaSectores(): Observable<any> {
        return this.httpClient.get(this.urlEndpointSector + '/listarSectores/0', {}).pipe(
            catchError(e => {
                console.error('Error al intentar listar las carteras. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaEstadoParametros(): Observable<any> {
        return this.httpClient.get(this.urlEndpointNumeroParametro + '/listarParametrosxCodigo/' + CODIGO_PARAMETRO_NUEMERO_PREGUNTA_PARAM, {}).pipe(
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

    obtenerParametro(idPreguntaSistema): Observable<any> {

        return this.httpClient.get(this.urlEndpointPreguntaSistema + '/obtenerParametro/' + idPreguntaSistema, {}).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos del parámetro. Msg: ' + e.error);
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
                console.error('Error al intentar obtener los datos de los sistemas. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    actualizarPreguntaSistema(preguntaSistema: PreguntaSistema): Observable<any> {
        return this.httpClient.put(this.urlEndpointPreguntaSistema + '/actualizarPreguntaSistema', preguntaSistema, {}).pipe(
            catchError(e => {
                console.error('Error al intentar registrar la pregunta. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    eliminarPreguntaSistema(preguntaSistema: PreguntaSistema): Observable<any> {
        return this.httpClient.post(this.urlEndpointPreguntaSistema + '/anularPreguntaSistema', preguntaSistema, {}).pipe(
            catchError(e => {
                console.error('Error al intentar eliminar la parámetro pregunta. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }
}
