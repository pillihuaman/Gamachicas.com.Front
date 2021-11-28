import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Periodo} from '../schema/periodo';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {AuthLoginService} from '../../main/pages/authentication/auth-login/auth-login.service';
import {
    CODIGO_PARAMETRO_PERIODO,
    CODIGO_PARAMETRO_ESTADO,
    CODIGO_PARAMETRO_OPERADORES
} from '../../data/utils/Constantes';
import {AlertService} from "../../data/services/alert.service";

@Injectable({
    providedIn: 'root'
})

export class PeriodoService {

    urlEndpointPeriodo = `${environment.apiUrl}/nivelmadurez/periodo`;
    urlEndpointPeriodoParametro = `${environment.apiUrl}/nivelmadurez/parametros`;
    urlEndpointCuestionario = `${environment.apiUrl}/nivelmadurez/cuestionario`;
    listaPeriodos: string;
    codigoTipoPeriodo = CODIGO_PARAMETRO_PERIODO;

    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService, private alertService: AlertService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    registrarNuevoPeriodo(periodoBody: Periodo): Observable<any> {
        return this.httpClient.post(this.urlEndpointPeriodo + '/registrarPeriodo', periodoBody, {}).pipe(catchError(e => {
                console.error('Error al intentar registrar el nuevo periodo. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaPeriodosParametro(): Observable<any> {
        return this.httpClient.get(this.urlEndpointPeriodoParametro + '/listarParametrosxCodigo/' + CODIGO_PARAMETRO_PERIODO, {}).pipe(
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

    obtenerListaPeriodos(anio: number): Observable<any> {
        return this.httpClient.get(this.urlEndpointPeriodo + '/listarPeriodos/' + anio, {}).pipe(
            catchError(e => {
                console.error('Error al intentar listar el periodo. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    getListPeriodQuestion(currentYear: string): Observable<any> {
        return this.httpClient.get(`${this.urlEndpointCuestionario}/listadoPeriodoEncuesta/${currentYear}`).pipe(
            catchError(err => {
                console.error(err);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(err);
            })
        )
    }

    getListPeriodInSurvey(year = 0, idPeriod = 0): Observable<any> {
        return this.httpClient.get(`${this.urlEndpointCuestionario}/listadoPeriodoEnEncuesta/${year}/${idPeriod}`).pipe(
            catchError(err => {
                console.error(err);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(err);
            })
        )
    }


    obtenerListaAnios(): Observable<any> {
        return this.httpClient.get(this.urlEndpointPeriodo + '/listarAnio/', {}).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos del año. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerPeriodo(idPeriodo): Observable<any> {
        return this.httpClient.get(this.urlEndpointPeriodo + '/obtenerPeriodo/' + idPeriodo, {}).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos del periodo. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    actualizarPeriodo(periodo: Periodo): Observable<any> {
        return this.httpClient.put(this.urlEndpointPeriodo + '/actualizarPeriodo', periodo, {}).pipe(
            catchError(e => {
                console.error('Error al intentar actualizar el periodo. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaEstadoParametros(param = CODIGO_PARAMETRO_ESTADO): Observable<any> {
        return this.httpClient.get(`${this.urlEndpointPeriodoParametro}/listarParametrosxCodigo/${param}`, {}).pipe(
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

    obtenerListadoBandejaEncuesta(year = '0', idPeriod = '0', idStatus = '0'): Observable<any> {
        return this.httpClient.get(`${this.urlEndpointCuestionario}/listadoBandejaEncuesta/${year}/${idPeriod}/${idStatus}`, {}).pipe(
            catchError(
                e => {
                    console.error('Error al intentar listar los cuestionarios. Msg: ' + e.error);
                    Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                    return throwError(e);
                }
            )
        );
    }

    guardarListaPeriodos(listaPeriodos: string): void {
        this.listaPeriodos = listaPeriodos;
        sessionStorage.setItem('listaPeriodos', this.listaPeriodos);
    }

    /* Se utilizará httpPost para enviar el cuerpo al delete */
    eliminarPeriodo(periodoBodyEliminar: Periodo): Observable<any> {
        return this.httpClient.post(this.urlEndpointPeriodo + '/anularPeriodo', periodoBodyEliminar, {}).pipe(
            catchError(e => {
                console.error('Error al intentar eliminar el periodo. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerDetalleCuestionario(idPeriodo: number,idSistema:number,tiPregunta:number,inNa:number): Observable<any> {
        console.log(idPeriodo);
        return this.httpClient.get(this.urlEndpointCuestionario + '/listadoDetalleEncuesta/' + idPeriodo + '/' + idSistema  + '/' + tiPregunta + '/' + inNa, {}).pipe(
            catchError(e => {
                console.error('Error al intentar listar detalle de cuestionarioa. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }
}
