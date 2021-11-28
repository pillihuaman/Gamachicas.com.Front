import { BandejaMetodologia } from './bandejametodologia';
import {DetalleClass} from './detalleclass';

export interface Datos
{
    listaClasePrincipal?:DetalleClass[];
    listaDetalleClasePrincipal?:DetalleClass[];
    listaClaseSecundaria?:DetalleClass[];
    listaDetalleClaseSecundaria?:DetalleClass[];
    idClasePrincipal?:number;
    detalleClasePrincipal?:DetalleClass;
    idClaseSecundaria?:number;
    detalleClaseSecundaria?:DetalleClass[];
    listaBandejaMetodologia?:BandejaMetodologia[];
}

