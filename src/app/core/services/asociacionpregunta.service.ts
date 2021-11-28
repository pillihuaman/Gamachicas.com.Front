import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {AsociacionClaseDetalle} from '../schema/asociacionclasedetalle';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {AuthLoginService} from '../../main/pages/authentication/auth-login/auth-login.service';
import {DetalleAsociacionClaseLst} from "../schema/detalleasociacionclaselst";
import {DetalleAsociacionClase} from "../schema/detalleasociacionclase";

@Injectable({
    providedIn: 'root'
})

export class AsociacionPreguntaService {

    nameTabla = "PRINCIPIO";
    urlEndpointGenerarCodigo = `${environment.apiUrl}/nivelmadurez/parametros`;
    urlEndpointSeccion = `${environment.apiUrl}/nivelmadurez/seccion`;
    urlEndpointNivel = `${environment.apiUrl}/nivelmadurez/nivel`;
    urlEndpointPrincipio = `${environment.apiUrl}/nivelmadurez/principio`;
    urlEndpointDetalleAsociacion = `${environment.apiUrl}/nivelmadurez/detalleasociacionclass`;
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
        return this.httpClient.get(this.urlEndpointGenerarCodigo + '/generarCodigoTabla/' + this.nameTabla + "/" + idSistema, {
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

    ListarClase(): Observable<any> {
        return this.httpClient.get(this.urlEndpointDetalleAsociacion + '/listarSistemaClase', {
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

    ListarSistemaClase(idSistema): Observable<any> {
        return this.httpClient.get(this.urlEndpointDetalleAsociacion + '/listarSistemaClase/' + idSistema, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de Clase por Sistema. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    ListarClasePrincipal(idSistema): Observable<any> {
        return this.httpClient.get(this.urlEndpointDetalleAsociacion + '/listarSistemaClasePrincipal/' + idSistema, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de Clase por Sistema. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    ListarClaseSecundaria(idSistema, idClasePrincipal): Observable<any> {
        return this.httpClient.get(this.urlEndpointDetalleAsociacion + '/listarClaseSecundaria/' + idSistema + '/' + idClasePrincipal, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de Clase por Sistema. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    ListarClaseDetalle(idClase, idSistema): Observable<any> {
        return this.httpClient.get(this.urlEndpointDetalleAsociacion + '/listarClaseDetalleMetodologia/' + idClase + '/' + idSistema, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de Clase por Sistema. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    ListarClaseDetallePrincipal(idClase, idSistema): Observable<any> {
        return this.httpClient.get(this.urlEndpointDetalleAsociacion + '/listarClaseDetalle/' + idClase + '/' + idSistema, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de Clase por Sistema. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    ListaPregunta(nuPreguntaParametro, idSistema): Observable<any> {
        return this.httpClient.get(this.urlEndpointDetalleAsociacion + '/listaPreguntaMetodologia/' + nuPreguntaParametro + '/' + idSistema, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de Clase por Sistema. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    listarBandejaClaseDetalle(idAsocClase,idSistema,idDetalleAsocPrincipal): Observable<any> {
        return this.httpClient.get(this.urlEndpointDetalleAsociacion + '/listarBandejaClaseDetalle/'+idAsocClase+'/'+idSistema+'/'+idDetalleAsocPrincipal, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de Clase por Sistema. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }


    listarClaseClaseDetalle(idSistema:number,idClasePrincipal:number,idClaseSecundaria:number,idDetalleAsocPrincipal:number): Observable<any> {
        return this.httpClient.get(this.urlEndpointDetalleAsociacion + '/listarClaseClaseDetalle/'+idSistema+"/"+idClasePrincipal+"/"+idClaseSecundaria+"/"+idDetalleAsocPrincipal, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de Clase por Sistema. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }

                Swal.fire('Error', 'Ocurrió un error inesperado.<br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    registrarDetalleAsociacionClase(detalleBody: DetalleAsociacionClaseLst): Observable<any> {
        return this.httpClient.post(this.urlEndpointDetalleAsociacion + '/registrarDetalleAsociacionClase', detalleBody, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.log(this.urlEndpointDetalleAsociacion + '/registrarPrincipio');
                console.error('Error al intentar registrar Detalle. Msg: ' + e.error);

                if (Swal.isLoading()) {
                    Swal.close();
                }

                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    actualizarDetalleAsociacionClase(detalleBody: DetalleAsociacionClaseLst): Observable<any> {
        return this.httpClient.put(this.urlEndpointDetalleAsociacion + '/actualizarDetalleAsociacionClase', detalleBody, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.log(this.urlEndpointDetalleAsociacion + '/actualizarDetalleAsociacionClase');
                console.error('Error al intentar registrar Detalle. Msg: ' + e.error);

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

    eliminarDetalleAsignacionClase(asociacionBodyEliminar: DetalleAsociacionClase): Observable<any> {
        return this.httpClient.put(this.urlEndpointDetalleAsociacion + '/eliminarDetalleAsignacionClase', asociacionBodyEliminar, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar eliminar a la asociacion. Msg: ' + e.error);
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

    ListarNivel(idNivel): Observable<any> {
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

    ListarSeccion(idSistema): Observable<any> {
        return this.httpClient.get(this.urlEndpointSeccion + '/listarSecciones/' + idSistema, {
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

    filtrarPesoPrincipalSecundaria(idClasePrincipal,
                                   idClaseSecundaria,
                                   idPregunta,
                                   idSistema): Observable<any> {
        return this.httpClient.get(this.urlEndpointDetalleAsociacion + '/filtrarPesoAsociacion/' + idClasePrincipal + '/' + idClaseSecundaria + '/' + idPregunta + '/' + idSistema, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar obtener los datos de Peso y Descripción Peso. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    cargarInformacionMetodologia(idAsocClase:number,idSistema:number,idDetalleAsocPrincipal:number): Observable<any> {
        return this.httpClient.get(this.urlEndpointDetalleAsociacion + '/cargarInformacionMetodologia/'+idAsocClase+"/"+idSistema+"/"+idDetalleAsocPrincipal,  {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.log(this.urlEndpointDetalleAsociacion + '/cargarInformacionMetodologia');
                console.error('Error al intentar registrar Detalle. Msg: ' + e.error);

                if (Swal.isLoading()) {
                    Swal.close();
                }

                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }



}
