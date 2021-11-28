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

export class ReporteConsolidadoService {

    urlEndpointPeriodo = `${environment.apiUrl}/nivelmadurez/periodo`;
    urlEndpointSistema = `${environment.apiUrl}/nivelmadurez/sistemaintegracion`;
    urlEndpointReportes = `${environment.apiUrl}/nivelmadurez/reporte`;
    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService, private alertService: AlertService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }


    ListarSistema(idPeriodo: number): Observable<any> {
        return this.httpClient.get(this.urlEndpointSistema + '/listarSistemaPeriodo/' + idPeriodo, {
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

    ListPeriodo(): Observable<any> {
        return this.httpClient.get(this.urlEndpointPeriodo + '/listaPeriodosConsol', {
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

    ListReporteConsolidado(idPerido: number, idSistema: number): Observable<any> {
        return this.httpClient.get(this.urlEndpointReportes + '/listarConsolidado/' + idPerido + "/" + idSistema, {
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

    reporteConsolidadoExport(idEmpresa: number, idPeriodo: number): Observable<any> {
        return this.httpClient.get(this.urlEndpointReportes + '/listarReporteNivelMadurez/' + idEmpresa + "/" + idPeriodo, {
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
