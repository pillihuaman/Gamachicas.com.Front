import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from "@angular/common/http";
import { AlertService } from "../../data/services/alert.service";
import { environment } from '../../../environments/environment';
import { Observable, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { PreguntaDetalle } from "../schema/preguntaDetalle";
import { AuthLoginService } from 'src/app/main/pages/authentication/auth-login/auth-login.service';
import Swal from 'sweetalert2';

@Injectable({
    providedIn: 'root'
})
export class FilesService {

    questionUri = `${environment.apiUrl}/nivelmadurez/file`;

    constructor(private httpClient: HttpClient,
        private alertService: AlertService, private authLoginService: AuthLoginService) {
    }

    private agregarCabeceras(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }

    uploadFile(file: File, preguntaDetalle: PreguntaDetalle): Observable<any> {
        let headers = new HttpHeaders();
        headers.set('Accept', 'multipart/form-data');
        let params = new HttpParams();
        const formData = new FormData();
        formData.set('file', file, file.name);
        formData.append("idEncuestaCab", preguntaDetalle.idEncuestaCab.toString());
        formData.append("idEncuestaDet", preguntaDetalle.idEncuestaDet.toString());
        formData.append("idConfiguracion", preguntaDetalle.idConfiguracion.toString());
        formData.append("idPeriodo", preguntaDetalle.idPeriodo.toString());
        formData.append("idSistema", preguntaDetalle.idSistema.toString());
        formData.append("idEmpresa", preguntaDetalle.idEmpresa.toString());
        formData.append("idPreguntaSistema", preguntaDetalle.idPreguntaSistema.toString());
        formData.append("idPregunta", preguntaDetalle.idPregunta.toString());
        formData.append("nuParametro", preguntaDetalle.nuParametro);
        formData.append("validacion", preguntaDetalle.validacion.toString());

        return this.httpClient.post(`${this.questionUri}/upload`, formData, {
            params,
            headers
        }).pipe(
            catchError(err => {
                console.error(err);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(err);
            })
        )
    }

    deleteFile(fileName: string, idFile: string, isTemp: string): Observable<any> {
        const formData = new FormData()
        formData.append("fileName", fileName);
        formData.append("idFile", idFile);
        formData.append("isTemp", isTemp);

        return this.httpClient.post(`${this.questionUri}/delete`, formData).pipe(catchError(err => {
            console.error(err);
            this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
            return throwError(err);
        })
        )
    }


    /*getFile(nombreArchivo: any): Observable<any> {

        return this.httpClient.get(`${this.questionUri}/download/` + nombreArchivo).pipe(catchError(err => {
            console.error(err);
            this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
            return throwError(err);
        })
        )
    }*/

    getFile(nombreArchivo: string): Observable<any> {
        const url = `${this.questionUri}/download/${nombreArchivo}`;
        return this.httpClient.get(url).pipe(catchError(err => {
            console.error(err);
            this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
            return throwError(err);
        })
        )
    }


    /*  getFile(nombrearchi: any): Observable<any> {
          const url = `${this.questionUri}/download/${nombrearchi}`;
          const parma = new HttpParams().set('filename', "prueba.docx")
          const options = { params: parma }
          return this.httpClient.get(url, { ...options, responseType: 'blob' });
      }*/

}


