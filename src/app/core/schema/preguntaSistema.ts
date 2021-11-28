export interface PreguntaSistema {
    idPreguntaSistema?: number;
    identificadorSistema?: number;
    descripcionSistema?: string;
    identificadorPregunta?: number;
    descripcionPregunta?: string;
    numeroPregunta?: string;
    numeroParametro?: string;
    descripcionParametro?: string;
    descripcionOpcionayuda?: string;
    descripcionEvidenciaAyuda?: string;
    identificadorSector?: number;
    descripcionSector?: string;
    indicadorBaja?: string;
    fechaUsuarioModifica?: string;
    usuario?: string;
    ipTransaccion?: string;
    tipoParametro?:number;
    deUsuarioModifica?: string;
    tipoPregunta?:string;
}
