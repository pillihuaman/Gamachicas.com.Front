export interface BandejaEncuestaEmpresa
{
    idEmpresa?:number;
    deEmpresa?:string;
    idPeriodo?:number;
    numAnio?:number;
    dePeriodo?:string;
    fechaCreacion?:string;
    fechaFin?:string;
    totalPreguntas?:number;
    totalRespondidas?:number;
    totalRespuestaRestantes?:number;
    idEstado?:number;
    descripcionEstado?:string;
    autoEvaluado?:string;
    idUsuario?:number;
    validado?:string;
}
