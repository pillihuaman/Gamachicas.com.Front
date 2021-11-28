import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthLoginService} from '../../main/pages/authentication/auth-login/auth-login.service';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {GenerarEncuesta} from '../schema/GenerarEncuesta';
import Swal from 'sweetalert2';
import {EncuestaNotificacion} from '../schema/encuestanotificacion';

@Injectable({
    providedIn: 'root'
})

export class EncuestaService
{
    urlEndpointEncuesta = `${environment.apiUrl}/nivelmadurez/cuestionario`;

    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    generarEncuesta(generarEncuesta: GenerarEncuesta): Observable<any> {
        return this.httpClient.post(this.urlEndpointEncuesta + '/generarEncuesta', generarEncuesta, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.error('Error al intentar generar Cuestionario. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }
    enviarNotificacionGenerado(encuestaNotificacion: EncuestaNotificacion): Observable<any> {
        return this.httpClient.post(this.urlEndpointEncuesta + '/procesoNotificadoCuestionario', encuestaNotificacion, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.error('Error al intentar notificar Proceso "Notificación" Cuestionario. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }
    listadoBandejaEmpresa(idEmpresa:number,idPeriodo:number,anio:number,idEstado:number): Observable<any> {
        console.log(idPeriodo);
        return this.httpClient.get(this.urlEndpointEncuesta + '/listadoBandejaEncuestaEmpresa/' + idEmpresa + '/' + idPeriodo  + '/' + anio + '/' + idEstado, {}).pipe(
            catchError(e => {
                console.error('Error al intentar listar bandeja de cuestionario por empresa. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }
    enviarAutoEvaluacionGenerado(encuestaNotificacion: EncuestaNotificacion): Observable<any> {
        return this.httpClient.post(this.urlEndpointEncuesta + '/procesoAutoEvaluadoCuestionario', encuestaNotificacion, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.error('Error al intentar notificar Proceso "AutoEvaluación" Cuestionario. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    listadoEstadoCuestionario(idDetalleParametro:number): Observable<any> {
        return this.httpClient.get(this.urlEndpointEncuesta + '/listadoEstadoEncuesta/' + idDetalleParametro, {}).pipe(
            catchError(e => {
                console.error('Error al intentar listar estado cuestionario. Msg: ' + e.error);
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }
}
