import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AsociacionClaseDetalle} from '../schema/asociacionclasedetalle';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {AuthLoginService} from '../../main/pages/authentication/auth-login/auth-login.service';

@Injectable({
    providedIn: 'root'
})

export class AsociacionClaseDetalleService {

    nameTabla = "PRINCIPIO";
    urlEndpointGenerarCodigo = `${environment.apiUrl}/nivelmadurez/parametros`;
    urlEndpointSeccion = `${environment.apiUrl}/nivelmadurez/seccion`;
    urlEndpointNivel = `${environment.apiUrl}/nivelmadurez/nivel`;
    urlEndpointPrincipio = `${environment.apiUrl}/nivelmadurez/principio`;
    urlEndpointSistemaIntegracion = `${environment.apiUrl}/nivelmadurez/sistemaintegracion`;
    listaPrincipio: string;

    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    registrarPrincipio(principioBody: AsociacionClaseDetalle): Observable<any> {
        return this.httpClient.post(this.urlEndpointPrincipio + '/registrarPrincipio', principioBody, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.log(this.urlEndpointPrincipio + '/registrarPrincipio');
                console.error('Error al intentar registrar principio. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    actualizarPrincipio(principio: AsociacionClaseDetalle): Observable<any> {
        return this.httpClient.put(this.urlEndpointPrincipio + '/actualizarPrincipio', principio, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar actualizar el principio. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaPrincipio(idSistema): Observable<any> {
        return this.httpClient.get(this.urlEndpointPrincipio + '/listarPrincipios/' + idSistema, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar los principios. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerPrincipio(idPrincipio): Observable<any> {
        return this.httpClient.get(this.urlEndpointPrincipio + '/obtenerPrincipio/' + idPrincipio, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos del principio. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerCodigoPrincipio(idSistema): Observable<any> {
        return this.httpClient.get(this.urlEndpointGenerarCodigo + '/generarCodigoTabla/' + this.nameTabla + "/" + idSistema , {
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

    guardarListaPrincipio(listaPrincipio: string): void {
        this.listaPrincipio = listaPrincipio;
        sessionStorage.setItem('listaPrincipio', this.listaPrincipio);
    }

    /* Se utilizará httpPost para enviar el cuerpo al delete */
    eliminarPrincipio(principioBodyEliminar: AsociacionClaseDetalle): Observable<any> {
        return this.httpClient.post(this.urlEndpointPrincipio + '/anularPrincipio', principioBodyEliminar, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar eliminar el principio. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    ListarSistemaIntegracion(): Observable<any> {
        return this.httpClient.get(this.urlEndpointSistemaIntegracion + '/listarSistemaIntegracion/' , {
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

    ListarNivel(idNivel): Observable<any> {
        return this.httpClient.get(this.urlEndpointNivel + '/listarNivel/' + idNivel , {
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

    ListarSeccion(idSistema): Observable<any> {
        return this.httpClient.get(this.urlEndpointSeccion + '/listarSecciones/' + idSistema , {
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

}
