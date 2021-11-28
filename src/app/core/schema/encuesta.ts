import {Question} from "./question";

export interface Encuesta {
    nuParametro?: number;
    deRutaArchivo?: string;
    dePregunta?: string;
    deEvidencia?: string;
    idEncuestaCab?: number;
    idEncuestaDet?: number;
    idPreguntaSistema?: number;
    idSistema?: number;
    idPregunta?: number;
    idEmpresa?: number;
    idConfiguracion?: number;
    idPeriodo?: number;
    idUsuaCrea?: string;
    deUsuaCreaIp?: string;
    nuPregunta?: string;
    statusCuestionario?: string;
    puntaje?: number;
    deEmpresa?: string;
    numAnio?: string;
    dePeriodo?: string;
    fechaCreacion?: string;
    totalPreguntas?: string;
    totalRespondidas?: string;
    totalRespuestasRestantes?: string;
    idEstado?: string;
    descripcionEstado?: string;
    autoEvaluado?: string;
    parametro?: string;
    notaPregunta?: string;
    parametroValidacion?: string;
    puntajeValidacion?: number;
}

export interface System {
    idPeriodo?: number;
    idEmpresa?: number;
    idSistema?: number;
    deSistema?: string;
    deSistemaIntegracion?: string;
    porcentajeAvance?: string;
}

export interface EstadoEncuesta {
    idPeriodo?: number;
    idEmpresa?: number;
    stEstadoEncuesta?: number;
    idEstado?: number;
    idUsuaModi?: string;
    deUsuaModiIp?: string;
    deUsuaModi?: string;
    idUsuario?: number;
}
