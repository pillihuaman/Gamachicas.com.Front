import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import { environment } from '../../../environments/environment';
import { Observable, throwError } from "rxjs";
import { catchError } from "rxjs/operators";
import { Encuesta, EstadoEncuesta } from "../schema/encuesta";
import { AuthLoginService } from "../../main/pages/authentication/auth-login/auth-login.service";
import { GenerarEncuesta } from "../schema/GenerarEncuesta";
import { AlertService } from "../../data/services/alert.service";

@Injectable({
    providedIn: 'root'
})
export class QuestionsService {

    questionUri = `${environment.apiUrl}/nivelmadurez/cuestionario`;

    constructor(private httpClient: HttpClient,
        private authLoginService: AuthLoginService,
        private alertService: AlertService) {
    }

    private headers(): HttpHeaders {
        return new HttpHeaders({
            'Content-Type': 'application/json',
            Authorization: 'Token ' + this.authLoginService.userToken
        });
    }


    getMainQuestions(idCompany: string, idPeriodo: number, idUsuario: number): Observable<any> {
        return this.httpClient.get(`${this.questionUri}/listaSistemaCuestionario/${idCompany}/${idPeriodo}/${idUsuario}`).pipe(
            catchError(err => {
                console.error(err);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(err);
            })
        )
    }

    getMainQuestionsValidacion(idCompany: string, idPeriodo: number, idUsuario: number): Observable<any> {
        return this.httpClient.get(`${this.questionUri}/listaSistemaCuestionarioValidacion/${idCompany}/${idPeriodo}/${idUsuario}`).pipe(
            catchError(err => {
                console.error(err);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(err);
            })
        )
    }

    getQuestionsStatus(idPeriod: string, idCompany: string, idSystem: string): Observable<any> {
        return this.httpClient.get(`${this.questionUri}/listaStatusPreguntaEncuesta/${idPeriod}/${idCompany}/${idSystem}`)
            .pipe(catchError(err => {
                console.error(err);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(err);
            })
            )
    }

    getQuestionsStatusValidacion(idPeriod: string, idCompany: string, idSystem: string): Observable<any> {
        return this.httpClient.get(`${this.questionUri}/listaStatusPreguntaEncuestaValidacion/${idPeriod}/${idCompany}/${idSystem}`)
            .pipe(catchError(err => {
                console.error(err);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(err);
            })
            )
    }

    getQuestionsPoint(idPeriod: string, idCompany: string, idSystem: string): Observable<any> {
        return this.httpClient.get(`${this.questionUri}/listaPreguntaPuntaje/${idPeriod}/${idCompany}/${idSystem}`)
            .pipe(catchError(err => {
                console.error(err);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(err);
            })
            )
    }

    getQuestionsEvidence(idPeriod: string, idCompany: string, idSystem: string, idQuestion: string): Observable<any> {
        console.log(`${this.questionUri}/listaPreguntaEvidencia/${idPeriod}/${idCompany}/${idSystem}/${idQuestion}`);
        return this.httpClient.get(`${this.questionUri}/listaPreguntaEvidencia/${idPeriod}/${idCompany}/${idSystem}/${idQuestion}`)
            .pipe(catchError(err => {
                console.error(err);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(err);
            })
            )
    }

    updateSurveyEvidence(request: any): Observable<any> {
        return this.httpClient.post(`${this.questionUri}/actualizarEncuesta`, request)
            .pipe(catchError(err => {
                console.error(err);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(err);
            })
            )
    }

    getPointsByCompany(idPregunta: string, parametroSeleccionado: string, idPeriodo: string, idSistema: string, idEmpresa: string): Observable<any> {
        return this.httpClient.get(`${this.questionUri}/puntajeObtenido/${idPregunta}/${parametroSeleccionado}/${idPeriodo}/${idSistema}/${idEmpresa}`)
            .pipe(catchError(err => {
                console.error(err);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(err);
            })
            )
    }

    setNotifyProcess(request: any): Observable<any> {
        return this.httpClient.post(`${this.questionUri}/actualizarEstadoEncuestaEmpresa`, request)
            .pipe(catchError(err => {
                console.error(err);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(err);
            })
            )
    }

    generarEncuesta(generarEncuesta: GenerarEncuesta): Observable<any> {
        return this.httpClient.post(this.questionUri + '/generarEncuesta', generarEncuesta, {
            headers: this.headers()
        }).pipe(catchError(err => {
            console.error(err);
            this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
            return throwError(err);
        })
        )
    }
    Ampliacionencuesta(generarEncuesta: GenerarEncuesta): Observable<any> {
        return this.httpClient.post(this.questionUri + '/ampliarEncuesta', generarEncuesta, {
            headers: this.headers()
        }).pipe(catchError(err => {
            console.error(err);
            this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
            return throwError(err);
        })
        )
    }

    enviarNotificacionGenerado(encuestaNotificacion: EstadoEncuesta): Observable<any> {
        return this.httpClient.post(this.questionUri + '/procesoNotificadoCuestionario', encuestaNotificacion, {
            headers: this.headers()
        }).pipe(catchError(err => {
            console.error(err);
            this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
            return throwError(err);
        })
        )
    }

    listadoBandejaEmpresa(idUsuario: number, idEmpresa: number, idPeriodo: number, anio: number, idEstado: number): Observable<any> {
        console.log(idPeriodo);
        return this.httpClient.get(`${this.questionUri}/listadoBandejaEncuestaEmpresa/${idUsuario}/${idEmpresa}/${idPeriodo}/${anio}/${idEstado}`, {})
            .pipe(catchError(err => {
                console.error(err);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(err);
            })
            )
    }

    listadoBandejaEmpresaFonafe(idEmpresa: number, idPeriodo: number, anio: number, idEstado: number): Observable<any> {
        console.log(idPeriodo);
        return this.httpClient.get(`${this.questionUri}/listadoBandejaValidacionEmpresa/${idEmpresa}/${idPeriodo}/${anio}/${idEstado}`, {})
            .pipe(catchError(err => {
                console.error(err);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(err);
            })
            )
    }

    enviarAutoEvaluacionGenerado(encuestaNotificacion: EstadoEncuesta): Observable<any> {
        return this.httpClient.post(this.questionUri + '/procesoAutoEvaluadoCuestionario', encuestaNotificacion, {
            headers: this.headers()
        }).pipe(catchError(err => {
            console.error(err);
            this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
            return throwError(err);
        })
        )
    }

    enviarValidacionGenerado(encuestaNotificacion: EstadoEncuesta): Observable<any> {
        return this.httpClient.post(this.questionUri + '/procesoValidacionCuestionario', encuestaNotificacion, {
            headers: this.headers()
        }).pipe(catchError(err => {
            console.error(err);
            this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
            return throwError(err);
        })
        )
    }

    getCuestionarioResume(idPeriodo: string, idEmpresa: string, idSistema: string): Observable<any> {
        return this.httpClient.get(`${this.questionUri}/listaSistemaPregunta/${idPeriodo}/${idEmpresa}/${idSistema}`, {
            headers: this.headers()
        }).pipe(catchError(err => {
            console.error(err);
            this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
            return throwError(err);
        })
        )
    }

    mantenimientoEncuesta(encuesta: Encuesta[]): Observable<any> {
        const request = {
            lstEncuestaAdd: encuesta
        }
        return this.httpClient.post(`${this.questionUri}/mantenimientoEncuesta`, request, {
            headers: this.headers()
        }).pipe(catchError(err => {
            console.error(err);
            this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
            return throwError(err);
        })
        )
    }



    mantenimientoEncuestaValidacion(encuesta: Encuesta[]): Observable<any> {
        const request = {
            lstEncuestaAdd: encuesta
        }
        return this.httpClient.post(`${this.questionUri}/mantenimientoEncuestaValidacion`, request, {
            headers: this.headers()
        }).pipe(catchError(err => {
            console.error(err);
            this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
            return throwError(err);
        })
        )
    }


    updateStatusCompany(encuesta: EstadoEncuesta): Observable<any> {
        return this.httpClient.post(`${this.questionUri}/actualizarEstadoEncuestaEmpresa`, encuesta, {
            headers: this.headers()
        }).pipe(catchError(err => {
            console.error(err);
            this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
            return throwError(err);
        })
        )
    }

    setPreviewNivelMadurez(request: any): Observable<any> {
        return this.httpClient.post(`${this.questionUri}/procesarNivelMadurezPrevisualizacion`, request)
            .pipe(catchError(err => {
                console.error(err);
                this.alertService.confirm('Ocurrió un error inesperado', 'error', 'Intente nuevamente por favor');
                return throwError(err);
            })
            )
    }

}
