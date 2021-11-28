export interface Pregunta {
    idPregunta?: number;
    descripcionPregunta?: string;
    numeroPregunta?: string;
    tipoPregunta?: string;
    numeroParametroMax?: number;
    notaPregunta?: string;
    indicadorNA?: number;
    indicadorBaja?: number;
    idSistema?: number;
    usuarioCreacion?: string;
    ipCreacion?: string;
    fechaCreacion?: string;
    usuarioModificacion?: string;
    ipModificacion?: string;
    fechaModificacion?: string;
    carteras?: number[];
    descripcionCartera?: string;
    descripcionSistema?:string;
    descripcionIndicadorBaja?:string;
    descripcionindicadorNA?:string;

}
