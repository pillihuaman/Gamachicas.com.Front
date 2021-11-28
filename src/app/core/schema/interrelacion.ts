import { Datos } from './datos';
export interface Interrelacion
{
    codeStatus?:string;
    messageStatus?:string;
    datos?:Datos;
    messageError?:string;
}
