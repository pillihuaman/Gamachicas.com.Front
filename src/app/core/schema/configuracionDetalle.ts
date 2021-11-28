import { Configuracion } from '../../../../src/app/core/schema/configuracion';
export interface ConfiguracionDetalle {
    idConfiguracionDetalle?: number;
    principal?: string;
    IdPrincipal?: number;
    descripcion?: string;
    sistema?: string;
    idSistema?: number;
    deValor1?: string;
    deValor2?: string;
    estadoAutoevaluacion?: string;
    idEstadoProceso?: number;
    deValor3?: string;
    deValor4?: string;
    deValor5?: string;
    estadoNotificacion?: string;
    idestadoNotificacion?: number;
    configuracion?: Configuracion;
    idUsuaCrea?: string;
    deUsuaCreaIp?: string;
    idUsuaModi?: string;
    deUsuaModiIp?: string;
    tipo?: number;
    deDetalle?: string;

    idDetaParametro?: number;
    deParametro?: string;
    idParametro?: number;
    coDetaParametro?: string;
    idDetaAdmin?: number;
    idOpcion?: number;
    nuOrden?: number;

    DEMAESTRO?: string;
    DEDETALLE?: string;
    DESISTEMA?: string;
    DEESTADONOTIFICACION?: string;
    DEESTADOAUTOEVALUACION?: string;
    DEMENU?: string;
    INBAJA?: number;
    DEESTADO?: string;
    IDDETAPARAMETRO?: number;



}




