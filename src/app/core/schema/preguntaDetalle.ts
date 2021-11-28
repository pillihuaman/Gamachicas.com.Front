import {Archivo} from "./archivo";

export interface PreguntaDetalle {
    idEncuestaCab?: number;
    idEncuestaDet?: number;
    idConfiguracion?: number;
    idPeriodo?: number;
    idSistema?: number;
    idEmpresa?: number;
    idPreguntaSistema?: number;
    idPregunta?: number;
    nuPregunta?: string;
    deOpcionAyuda?: string;
    deEvidenciaAyuda?: string;
    deEvidencia?: string;
    deValidacion?: string;
    sustentoEvidencia?: string;
    sustentoEvidenciaValidacion?:string
    nuParametroSeleccionado?: string;
    archivoAdjunto?: string;
    lstArchivoFisico?: Archivo[];
    lstArchivoValidacion?: Archivo[];
    lstFiles?: file[];
    nuParametro?: string;
    parametro?: string;
    notaPregunta?:string;
    selectParam?: string;
    nuPuntaje?: number;
    comentario?:string;
    validacion?:number;
}

export class file {
    lastModified?: number;
    name?: string;
    progress?: number;
    size?: number;
    type?: string;

    constructor(lastModified: number, name: string, progress: number, size: number, type: string) {
        this.lastModified = lastModified;
        this.name = name;
        this.progress = progress;
        this.size = size;
        this.type = type;
    }
}


