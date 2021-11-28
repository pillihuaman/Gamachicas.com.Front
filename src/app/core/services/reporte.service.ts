import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { AuthLoginService } from '../../main/pages/authentication/auth-login/auth-login.service';
import { AlertService } from "../../data/services/alert.service";
import { CODIGO_PARAMETRO_ESTADO, CODIGO_PARAMETRO_PERIODO, PARAMETRO_TIPO_PREGUNTA, PARAMETRO_TIPO_REPORTE, PARAMETRO_PAR_PUN } from '../../data/utils/Constantes';
@Injectable({
    providedIn: 'root'
})

export class ReporteService {

    urlEndpointSistemaIntegracion = `${environment.apiUrl}/nivelmadurez/empresa`;
    urlEndpointPeriodo = `${environment.apiUrl}/nivelmadurez/periodo`;
    urlEndpointReporte = `${environment.apiUrl}/nivelmadurez/reporte`;
    urlEndpointClase = `${environment.apiUrl}/nivelmadurez/clase`;
    urlEndpointParametro = `${environment.apiUrl}/nivelmadurez/parametros`;
    urlEndpointSistemaIntegracionbtn = `${environment.apiUrl}/nivelmadurez/sistemaintegracion`
    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService, private alertService: AlertService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }


    ListarSistemaIntegracion(idSistema: number, idEstado: number): Observable<any> {
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

    ListPeriodQuestion(anio: number, idPeriodo: number, idEstado: number): Observable<any> {
        return this.httpClient.get(this.urlEndpointPeriodo + '/listadoPeriodoEmpresa/' + anio + '/' + idPeriodo + '/' + idEstado, {
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
    ListPeriodQuestionEmpresa(idEmpresa: any): Observable<any> {
        return this.httpClient.get(this.urlEndpointPeriodo + '/listaPeriodosEmpresa/' + parseInt(idEmpresa), {
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


    listarFiltroReporte(): Observable<any> {
        return this.httpClient.get(this.urlEndpointReporte + '/listarFiltroReporte', {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar sistemas. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }
    listarNivelMadurez(tipoReporte: string, idPeriodo: number, idEmpresa: number, idSistema: number, idClase: number, idDetalleClase: number): Observable<any> {
        return this.httpClient.get(this.urlEndpointReporte + '/listaResultadoAutoEvaluacion/' + tipoReporte + '/' + Number.parseInt(idPeriodo + '') + '/' + idEmpresa + '/' + idSistema + '/' + idClase + '/' + idDetalleClase, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar sistemas. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    listaTipoReporte(): Observable<any> {
        return this.httpClient.get(this.urlEndpointReporte + '/ /', {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar sistemas. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }
    listaClase(): Observable<any> {
        return this.httpClient.get(this.urlEndpointClase + '/listarClases', {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar sistemas. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }
    listaClaseResult(idEmpresa: number, idPerido: number, idSistema: number): Observable<any> {
        return this.httpClient.get(this.urlEndpointReporte + '/listaClaseResul/' + idEmpresa + '/' + idPerido + '/' + idSistema, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar sistemas. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }
    listaDetalleClase(): Observable<any> {
        return this.httpClient.get(this.urlEndpointReporte + '/ /', {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar sistemas. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }
    listarGraficos(): Observable<any> {
        return this.httpClient.get(this.urlEndpointReporte + '/ /', {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar sistemas. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaPeriodosParametro(): Observable<any> {
        return this.httpClient.get(this.urlEndpointParametro + '/listarParametrosxCodigo/' + CODIGO_PARAMETRO_PERIODO, {}).pipe(
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

    obtenerListaTipoPregunta(): Observable<any> {
        return this.httpClient.get(this.urlEndpointParametro + '/listarParametrosxCodigo/' + PARAMETRO_TIPO_PREGUNTA, {}).pipe(
            catchError(e => {
                console.error('Error al intentar listar los tipos de pregunta. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaTipoReporte(): Observable<any> {
        return this.httpClient.get(this.urlEndpointParametro + '/listarParametrosxCodigo/' + PARAMETRO_TIPO_REPORTE, {}).pipe(
            catchError(e => {
                console.error('Error al intentar listar los tipos de reporte. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaTipoParametro(): Observable<any> {
        return this.httpClient.get(this.urlEndpointParametro + '/listarParametrosxCodigo/' + PARAMETRO_PAR_PUN, {}).pipe(
            catchError(e => {
                console.error('Error al intentar listar los tipos de parametro. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaResultadoPregunta(idPeriodo, idEmpresa, idSistema, idTipoPregunta): Observable<any> {
        return this.httpClient.get(this.urlEndpointReporte + '/listaResultadoPregunta/' + idPeriodo + '/' + idEmpresa + '/' + idSistema + '/' + idTipoPregunta, {}).pipe(
            catchError(e => {
                console.error('Error al intentar listar los tipos de parametro. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    ListarSistemaIntegracionNotIn(idempresa: number, idPeriodo: number,idUsuario:number): Observable<any> {
        //return this.httpClient.get(this.urlEndpointSistemaIntegracion + '/listarSistemaIntegracionEmpresa/' + idSistema + '/' + idEstado + '/' + notIn, {
        return this.httpClient.get(this.urlEndpointSistemaIntegracionbtn + '/listarSistemaEmpresa/' + idempresa + '/' + idPeriodo+'/'+idUsuario, {

            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de sistemas. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }


    ListarEmpresaUsuario(idUsuario: number): Observable<any> {
        //return this.httpClient.get(this.urlEndpointSistemaIntegracion + '/listarSistemaIntegracionEmpresa/' + idSistema + '/' + idEstado + '/' + notIn, {
        return this.httpClient.get(this.urlEndpointSistemaIntegracion + '/listarEmpresaUsuario/' + idUsuario, {

            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de sistemas. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    reporteResulClaseExport(idEmpresa: number, idPeriodo: number): Observable<any> {
        return this.httpClient.get(this.urlEndpointReporte + '/listarReporteResulClase/' + idEmpresa + "/" + idPeriodo, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos del reporte resultado por clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    reporteResulPreguntaExport(idEmpresa: number, idPeriodo: number): Observable<any> {
        return this.httpClient.get(this.urlEndpointReporte + '/listarReporteResulPregunta/' + idEmpresa + "/" + idPeriodo, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos del reporte resultado por pregunta. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    reporteConsolidadoExport(idEmpresa: number, idPeriodo: number): Observable<any> {
        return this.httpClient.get(this.urlEndpointReporte + '/listarReporteNivelMadurez/' + idEmpresa + "/" + idPeriodo, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos del reporte consolidado de nivel de madurez. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }


}
