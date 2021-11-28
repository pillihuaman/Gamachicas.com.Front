import {DTOSubMenu} from './dtosubmenu';

export interface DTOMenu
{
    idMenu?:number;
    nombreMenu?:string;
    rutaMenu?:string;
    iconoMenu?:string;
    estado?:string;
    orden?:number;
    listaSubmenu:DTOSubMenu[];
}
