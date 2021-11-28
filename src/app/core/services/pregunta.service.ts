import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Pregunta} from '../schema/pregunta';
import {Resultado} from '../schema/resultado';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {AuthLoginService} from '../../main/pages/authentication/auth-login/auth-login.service';
import {CODIGO_CARTERA_INTERNA, CODIGO_PARAMETRO_TIPO_PREGUNTA} from '../../data/utils/Constantes';

@Injectable({
    providedIn: 'root'
})

export class PreguntaService {

    //cambios generar codigo pregunta
    //inicio
    nameTabla = 'PREGUNTA';
    urlEndpointGenerarCodigo = `${environment.apiUrl}/nivelmadurez/parametros`;
    //fin
    urlEndpointSeccion = `${environment.apiUrl}/nivelmadurez/seccion`;
    urlEndpointNivel = `${environment.apiUrl}/nivelmadurez/nivel`;
    urlEndpointPregunta = `${environment.apiUrl}/nivelmadurez/pregunta`;
    urlEndpointSistemaIntegracion = `${environment.apiUrl}/nivelmadurez/sistemaintegracion`;
    urlEndpointCartera = `${environment.apiUrl}/nivelmadurez/sector`;
    urlEndpointGenerarBanco = `${environment.apiUrl}/nivelmadurez/preguntasistema`;
    urlEndpointPeriodoParametro = `${environment.apiUrl}/nivelmadurez/parametros`;
    listaPregunta: string;

    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    registrarPregunta(preguntaBody: Pregunta): Observable<any> {
        return this.httpClient.post(this.urlEndpointPregunta + '/registrarPregunta', preguntaBody, {}).pipe(
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

    actualizarPregunta(oreguntaBody: Pregunta): Observable<any> {
        return this.httpClient.put(this.urlEndpointPregunta + '/actualizarPregunta', oreguntaBody, {}).pipe(
            catchError(e => {
                console.error('Error al intentar actualizar la pregunta. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaPregunta(idSistema): Observable<any> {
        return this.httpClient.get(this.urlEndpointPregunta + '/listarPreguntas/' + idSistema, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar las preguntas. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerPregunta(idPregunta): Observable<any> {
        return this.httpClient.get(this.urlEndpointPregunta + '/obtenerPregunta/' + idPregunta, {}).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de la pregunta. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    guardarListaPregunta(listaPregunta: string): void {
        this.listaPregunta = listaPregunta;
        sessionStorage.setItem('listaPregunta', this.listaPregunta);
    }

    /* Se utilizará httpPost para enviar el cuerpo al delete */

    eliminarPregunta(preguntaBodyEliminar: Pregunta): Observable<any> {
        return this.httpClient.post(this.urlEndpointPregunta + '/anularPregunta', preguntaBodyEliminar, {}).pipe(
            catchError(e => {
                console.error('Error al intentar eliminar la pregunta. Msg: ' + e.error);
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
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    listarTipoPregunta(): Observable<any> {
        return this.httpClient.get(this.urlEndpointPeriodoParametro + '/listarParametrosxCodigo/' + CODIGO_PARAMETRO_TIPO_PREGUNTA, {}).pipe(
            catchError(e => {
                console.error('Error al intentar obtener la lista de tipo de preguntas. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    listarNivel(idNivel): Observable<any> {
        return this.httpClient.get(this.urlEndpointNivel + '/listarNivel/' + idNivel, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos del nivel. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    listarCartera(indicadorEstado): Observable<any> {
        return this.httpClient.get(this.urlEndpointCartera + '/listarSectores/' + CODIGO_CARTERA_INTERNA + '/' + indicadorEstado, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de cartera. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    generarBancoPregunta(resultado: Resultado): Observable<any> {
        return this.httpClient.post(this.urlEndpointGenerarBanco + '/generarBancoPreguntas', resultado, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.error('Error al intentar generar Banco de Preguntas. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    //cambios generar codigo pregunta
    //inicio
    obtenerCodigoPregunta(idSistema): Observable<any> {
        return this.httpClient.get(this.urlEndpointGenerarCodigo + '/generarCodigoTablaAll/' + this.nameTabla + '/' + idSistema, {
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
