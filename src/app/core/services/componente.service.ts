import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Componente} from '../schema/componente';
import {Resultado} from '../schema/resultado';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {AuthLoginService} from '../../main/pages/authentication/auth-login/auth-login.service';

@Injectable({
    providedIn: 'root'
})

export class ComponenteService {

    nameTabla = 'COMPONENTE';
    urlEndpointGenerarCodigo = `${environment.apiUrl}/nivelmadurez/parametros`;
    urlEndpointComponente = `${environment.apiUrl}/nivelmadurez/componente`;
    urlEndpointSistemaIntegracion = `${environment.apiUrl}/nivelmadurez/sistemaintegracion`;
    urlEndpointGenerarBanco = `${environment.apiUrl}/nivelmadurez/preguntasistema`;
    listaComponentes: string;

    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    registrarNuevoComponente(componenteBody: Componente): Observable<any> {
        return this.httpClient.post(this.urlEndpointComponente + '/registrarComponente', componenteBody, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.error('Error al intentar registrar el nuevo componente. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaComponentes(idSistema): Observable<any> {
        return this.httpClient.get(this.urlEndpointComponente + '/listarComponentes/' + idSistema, {
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

    obtenerCodigoComponente(idSistema): Observable<any> {
        return this.httpClient.get(this.urlEndpointGenerarCodigo + '/generarCodigoTabla/' + this.nameTabla + '/' + idSistema, {
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

    obtenerComponente(idComponente): Observable<any> {
        return this.httpClient.get(this.urlEndpointComponente + '/obtenerComponente/' + idComponente, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos del componente. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    actualizarComponente(componente: Componente): Observable<any> {
        return this.httpClient.put(this.urlEndpointComponente + '/actualizarComponente', componente, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar actualizar el componente. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    guardarListaComponentes(listaComponentes: string): void {
        this.listaComponentes = listaComponentes;
        sessionStorage.setItem('listaComponentes', this.listaComponentes);
    }

    /* Se utilizará httpPost para enviar el cuerpo al delete */
    eliminarComponente(componenteBodyEliminar: Componente): Observable<any> {
        return this.httpClient.post(this.urlEndpointComponente + '/anularComponente', componenteBodyEliminar, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar eliminar el componente. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    listarSistemaIntegracion(): Observable<any> {
        return this.httpClient.get(this.urlEndpointSistemaIntegracion + '/listarSistemaIntegracion/', {
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
}
