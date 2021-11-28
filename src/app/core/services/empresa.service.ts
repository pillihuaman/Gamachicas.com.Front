import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Empresa} from '../schema/empresa';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {AuthLoginService} from '../../main/pages/authentication/auth-login/auth-login.service';
import {
    CODIGO_PARAMETRO_PERIODO,
    CODIGO_PARAMETRO_ESTADO,
    CODIGO_PARAMETRO_OPERADORES,
    CODIGO_PARAMETRO_TSECTOR
} from '../../data/utils/Constantes';
import {AlertService} from "../../data/services/alert.service";

@Injectable({
    providedIn: 'root'
})

export class EmpresaService {

    urlEndpointSector = `${environment.apiUrl}/nivelmadurez/sector`;
    urlEndpointEmpresa = `${environment.apiUrl}/nivelmadurez/empresa`;
    urlEndpointPeriodoParametro = `${environment.apiUrl}/nivelmadurez/parametros`;
    listaSectores: string;

    constructor(private httpClient: HttpClient,
                private authLoginService: AuthLoginService,
                private alertService: AlertService
    ) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    registrarEmpresa(empresa: Empresa): Observable<any> {
        return this.httpClient.post(this.urlEndpointEmpresa + '/registrarEmpresa', empresa, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.error('Error al intentar registrar la nueva cartera. Msg: ' + e.error);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(e);
            })
        );
    }

    actualizarEmpresa(empresa: Empresa): Observable<any> {
        return this.httpClient.put(this.urlEndpointEmpresa + '/actualizarEmpresa', empresa, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.error('Error al intentar registrar la nueva cartera. Msg: ' + e.error);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(e);
            })
        );
    }

    listarCartera(tipoCartera): Observable<any> {
        return this.httpClient.get(this.urlEndpointSector + '/listarCartera/' + tipoCartera, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar las carteras. Msg: ' + e.error);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(e);
            })
        );
    }

    listarEmpresa(empresa: Empresa): Observable<any> {
        return this.httpClient.post(this.urlEndpointEmpresa + '/listarEmpresa/', empresa, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar las carteras. Msg: ' + e.error);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(e);
            })
        );
    }

    obtenerListaEstadoParametros(): Observable<any> {
        return this.httpClient.get(this.urlEndpointPeriodoParametro + '/listarParametrosxCodigo/' + CODIGO_PARAMETRO_ESTADO, {}).pipe(
            catchError(
                e => {
                    console.error('Error al intentar listar los estados. Msg: ' + e.error);
                    this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                    return throwError(e);
                }
            )
        );
    }

    eliminarEmpresa(empresa: Empresa): Observable<any> {
        return this.httpClient.post(this.urlEndpointEmpresa + '/anularEmpresa', empresa, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar eliminar la empresa. Msg: ' + e.error);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(e);
            })
        );
    }

}
