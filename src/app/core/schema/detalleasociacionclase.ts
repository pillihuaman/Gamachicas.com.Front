export interface DetalleAsociacionClase {

    idAsocClase?: number;
    idAsocClaseDet?: number;
    idSistema?: number;
    deSistema?: string;
    idClasePadre?:number;
    clasePrincipal?: string;
    idClasePrincipal?: number;
    nuClasePrincipal?:string;
    nombreClasePrincipal?:string;
    dePesoPrincipal?:string;
    pesoPrincipal?: number;
    idClaseAsociadoa?:number;
    idClaseSecundaria?: number;
    claseSecundaria?: string;
    nuClaseSecundaria?:string;
    nombreClaseSecundaria?:string;
    pesoSecundaria?: number;
    dePesoSecundaria?:string;
    idPregunta?: number;
    idDetalleClase?: number;
    nuDetalleClase?: string;
    detalleClase?: string;
    deSistemaIntegracion?: string;
    deAsociadoA?: string;
    detalleClasePrincipal?: string;
    deEstado?: string;
    inBaja?:number;
    idUsuaCrea?:string;
    deUsuaCreaIp?:string;
    idUsuaModi?:string;
    deUsuaModiIp?:string;
}
