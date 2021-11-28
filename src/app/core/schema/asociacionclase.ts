export interface AsociacionClase {

    idAsocClase?: number;
    idSistema?: number;
    idClasePrincipal?: number;
    idClaseSecundaria?: number;
    inBaja?: number;
    idUsuaCrea?: string;
    deUsuaCreaIp?: string;
    idUsuaModi?: string;
    deUsuaModiIp?: string;
    deSistema?: string;
    clasePrincipal?: string;
    claseSecundaria?: string;
    lstClassAdd?: any[];
    online?:number;
}
