import {Controls} from './controls';

export interface Permiso
{
    idSubMenu?:number;
    nombreSubMenu?:string;
    iconoSubMenu?:string;
    listaControls?:Controls[];
}
