export interface ReporteConsolidado {
    anio?: string;
    dePeriodo?: string;
    empresa?: string;
    carteraFonafe?: string;
    carteraInterna?: string;
    sistema?: string;
    detalleSistema?: string;

    puntaObtenidoAuto?: number;
    puntaRelativoAuto?: number;
    puntaAbsolutoAuto?: number;
    cumpObtenidoAuto?: number;
    nivelMadurezAuto?: string;
    DetNivelMadurezAuto?: string;
    puntaObtenidoVal?: number;
    puntaRelativoVal?: number;
    puntaAbsolutoVal?: number;
    cumpObtenidoVal?: number;
    nivelMadurezVal?: string;
    DetNivelMadurezVal?: string;

    clase?: string;
    detalleClase?: string;
    desDetalleClase?: string;
    puntaClasObtenidoAuto?: number;
    puntaClasRelativoAuto?: number;
    puntaClasAbsolutoAuto?: number;
    cumpClasObtenidoAuto?: number;
    pesoClasAuto?: number;
    puntaClasObtEquiAuto?: number;
    puntaClasMaxRelaEquiAuto?: number;
    puntaClasMaxAbsEquiAuto?: number;
    puntaClasObtVal?: number;
    puntaClasMaxRelVal?: number;
    puntaClasMaxAbsVal?: number;
    cumpClasObtVal?: number;
    pesoVal?: number;
    puntaClasObtEquiVal?: number;
    puntaClasMaxRelEquiVal?: number;
    puntaClasMaxAbsEquiVal?: number;

    tipoPregunta?: string;
    pregunta?: string;
    detallePregunta?: string;
    peso?: number;
    na?: string;
    paraMax?: string;
    paraSelAuto?: string;
    puntaPregObtenidoAuto?: number;
    puntaPregMaxRelativoAuto?: number;
    puntaPregMaxAbsolutoAuto?: number;
    paraSelVal?: string;
    puntaPregObtenidoVal?: number;
    puntaPregMaxRelativoVal?: number;
    puntaPregMaxAbsolutoVal?: number;
    comeVal?: string;
}
