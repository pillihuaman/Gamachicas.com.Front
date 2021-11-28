import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Sector} from '../schema/sector';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {AuthLoginService} from '../../main/pages/authentication/auth-login/auth-login.service';
import {CODIGO_PARAMETRO_PERIODO,CODIGO_PARAMETRO_ESTADO, CODIGO_PARAMETRO_OPERADORES, CODIGO_PARAMETRO_TSECTOR} from '../../data/utils/Constantes';

@Injectable({
    providedIn: 'root'
})

export class SectorService {

    urlEndpointSector = `${environment.apiUrl}/nivelmadurez/sector`;
    urlEndpointPeriodoParametro = `${environment.apiUrl}/nivelmadurez/parametros`;
    listaSectores: string;

    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    registrarNuevoSector(sectorBody: Sector): Observable<any> {
        return this.httpClient.post(this.urlEndpointSector + '/registrarSector', sectorBody, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.error('Error al intentar registrar la nueva cartera. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerListaSectores(indicadorEstado): Observable<any> {
        return this.httpClient.get(this.urlEndpointSector + '/listarSectores/0/'+indicadorEstado, {
            headers: this.agregarCabeceras()
        }).pipe(
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
        return this.httpClient.get(this.urlEndpointPeriodoParametro + '/listarParametrosxCodigo/' + CODIGO_PARAMETRO_ESTADO, {}).pipe(
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

    obtenerListaTipoSector(): Observable<any> {
        return this.httpClient.get(this.urlEndpointPeriodoParametro + '/listarParametrosxCodigo/' + CODIGO_PARAMETRO_TSECTOR, {}).pipe(
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

    obtenerSector(idSector): Observable<any> {
        return this.httpClient.get(this.urlEndpointSector + '/obtenerSector/' + idSector, {
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

    actualizarSector(sector: Sector): Observable<any> {
        return this.httpClient.put(this.urlEndpointSector + '/actualizarSector', sector, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar actualizar la cartera. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    guardarListaSectores(listaSectores: string): void {
        this.listaSectores = listaSectores;
        sessionStorage.setItem('listaSectores', this.listaSectores);
    }

    eliminarSector(sectorBodyEliminar: Sector): Observable<any> {
        return this.httpClient.post(this.urlEndpointSector + '/anularSector', sectorBodyEliminar, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar eliminar la cartera. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }
}
