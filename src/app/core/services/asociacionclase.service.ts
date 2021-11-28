import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AsociacionClase} from '../schema/asociacionclase';
import {AsociacionClaseLst} from '../schema/asociacionclaselst';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {AuthLoginService} from '../../main/pages/authentication/auth-login/auth-login.service';

@Injectable({
    providedIn: 'root'
})

export class AsociacionClaseService
{
    urlEndpointDetalleAsociacion  = `${environment.apiUrl}/nivelmadurez/detalleasociacionclass`;
    urlEndpointAsociacionClass = `${environment.apiUrl}/nivelmadurez/asociacionclass`;
    urlEndpointSistemaIntegracion = `${environment.apiUrl}/nivelmadurez/sistemaintegracion`;
    urlEndpointClase = `${environment.apiUrl}/nivelmadurez/clase`;
    listaPrincipio: string;

    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    registrarAsociacionClase(asociacionClase: AsociacionClase): Observable<any> {
        return this.httpClient.post(this.urlEndpointAsociacionClass + '/registrarAsociacionClase', asociacionClase, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.log(this.urlEndpointAsociacionClass + '/registrarAsociacionClase');
                console.error('Error al intentar registrar Asociacion Clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    actualizarAsociacionClase(asociacionClaseBody: AsociacionClase): Observable<any> {
        return this.httpClient.put(this.urlEndpointAsociacionClass + '/actualizarAsociacionClase', asociacionClaseBody, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar actualizar Asociacion Clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    actualizarAsociaciones(asociacionesClaseBody: AsociacionClaseLst): Observable<any> {
        return this.httpClient.put(this.urlEndpointAsociacionClass + '/actualizarAsociacionClase', asociacionesClaseBody, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar actualizar Asociacion Clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerAsociacionClase(idSistema): Observable<any>
    {
        return this.httpClient.get(this.urlEndpointAsociacionClass + '/obtenerAsignacionClase/' + idSistema, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar Asociación Clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    ListarSistemaIntegracion(idSistema:number,idEstado:number): Observable<any> {
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

    ListarClase(): Observable<any> {
        return this.httpClient.get(this.urlEndpointAsociacionClass + '/listarClase', {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de Clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaClasesxSistema(idSistema): Observable<any> {
        return this.httpClient.get(this.urlEndpointClase + '/listarClasesSistema/' + idSistema, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar las clases por sistema. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    FiltrarClase(idClasePrincipal): Observable<any> {
        return this.httpClient.get(this.urlEndpointAsociacionClass + '/filtrarClase/' + idClasePrincipal, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de Clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    ListarAsignacionClase(idSistema): Observable<any> {
        return this.httpClient.get(this.urlEndpointAsociacionClass + '/listarAsignacionClase/' + idSistema, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de Asignacion de Clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }


    ValidarAsignacionClase(idSistema,ClasePrincipal,ClaseSecundaria): Observable<any> {
        return this.httpClient.get(this.urlEndpointAsociacionClass + '/validarAsignacionClase/' + idSistema+'/'+ClasePrincipal+'/'+ClaseSecundaria, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de Asignacion de Clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }



    eliminarAsignacionClase(asociacionClase: AsociacionClase): Observable<any> {
        return this.httpClient.post(this.urlEndpointAsociacionClass + '/anularAsignarClase', asociacionClase, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar eliminar Asignación Clase. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    validarAsociacionClase(idSistema,idClasePrincipal,idClaseSecundaria): Observable<any>
    {
        return this.httpClient.get(this.urlEndpointDetalleAsociacion + '/validarAsociacionClase/'+idSistema+'/'+idClasePrincipal+'/'+idClaseSecundaria, {
           headers: this.agregarCabeceras()
        }).pipe(
        catchError(e => {
             console.error('Error al intentar al validar Asociación Clase. Msg: ' + e.error);
             if (Swal.isLoading())
             {
                 Swal.close();
             }
             Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
        return throwError(e);
        }));
    }


}
