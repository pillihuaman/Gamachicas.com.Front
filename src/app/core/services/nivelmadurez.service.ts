import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {Sistema} from '../schema/sistema';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {AuthLoginService} from '../../main/pages/authentication/auth-login/auth-login.service';
import {NivelMadurez} from '../schema/nivelmadurez';

@Injectable({
    providedIn: 'root'
})

export class NivelMadurezService {

    urlEndpointNivelMadurez = `${environment.apiUrl}/nivelmadurez`;

    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    registrarNivelMadurez(nivelMadurez: NivelMadurez): Observable<any> {
        return this.httpClient.post(this.urlEndpointNivelMadurez + '/registrarNivelMadurez', nivelMadurez, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.error('Error al intentar registrar el nivel de madurez. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    actualizarNivelMadurez(nivelMadurez: NivelMadurez): Observable<any> {
        return this.httpClient.post(this.urlEndpointNivelMadurez + '/actualizarNivelMadurez', nivelMadurez, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.error('Error al intentar actualizar el nivel de madurez. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    listarNivelMadurez(): Observable<any> {
        return this.httpClient.get(this.urlEndpointNivelMadurez + '/listadoNivelMadurez/' + 0, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar listar nivel de madurez. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    anularNivelMadurez(nivelMadurez: NivelMadurez): Observable<any> {
        return this.httpClient.post(this.urlEndpointNivelMadurez + '/anularNivelMadurez', nivelMadurez, {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar anular el nivel de madurez. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

    obtenerNivelMadurez(idDetaParametro: number): Observable<any> {
        return this.httpClient.get(this.urlEndpointNivelMadurez + '/listadoNivelMadurez/' + Number(idDetaParametro), {
            headers: this.agregarCabeceras()
        }).pipe(
            catchError(e => {
                console.error('Error al intentar anular el nivel de madurez. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

}
