export interface PreguntaResultado {
    idPregunta?: number;
    tipoPregunta?: string;
    pregunta?: string;
    detalleClase?:string;
    detallePregunta?: string;
    parametroAutoevaluacion?:string;
    puntajeAutoevaluacion?:string;

    parametroValidacion?:string;
    puntajeValidacion?:string;
    priorizacion?:string;
    comentario?:string;


}
