import {Menu} from './menu';
import {Permiso} from './permiso';

export interface DatosPerfiles
{
    listaMenu:Menu[];
    listaMenuSel:Menu[];
    lstPermiso:Permiso[];
    lstPermisoSel:Permiso[];
}
