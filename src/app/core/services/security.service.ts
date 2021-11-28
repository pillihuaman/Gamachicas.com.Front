import {Injectable} from '@angular/core';
import {environment} from '../../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AuthLoginService} from '../../main/pages/authentication/auth-login/auth-login.service';
import {Sistema} from '../schema/sistema';
import {Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import Swal from 'sweetalert2';
import {PerfilOpcion} from '../schema/perfilopcion';


@Injectable({
    providedIn: 'root'
})

export class SecurityService
{
    urlEndpointSistema = `${environment.apiUrl}/nivelmadurez/security`;

    constructor(private httpClient: HttpClient, private authLoginService: AuthLoginService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    registrarPerfilOpcion(perfilOpcion: PerfilOpcion): Observable<any> {
        return this.httpClient.post(this.urlEndpointSistema + '/registrarPerfilOpcion', perfilOpcion, {
            headers: this.agregarCabeceras()
        }).pipe(catchError(e => {
                console.error('Error al intentar registrar permisos de usuario. Msg: ' + e.error);
                if (Swal.isLoading()) {
                    Swal.close();
                }
                Swal.fire('Error', 'Ocurrió un error inesperado.<br><br>Intente nuevamente por favor.', 'error');
                return throwError(e);
            })
        );
    }

}
