import { Menu } from '../../../../src/app/core/schema/menu';
import { Control } from '../../../../src/app/core/schema/control';
import { SubMenu } from '../../../../src/app/core/schema/subMenu';
import { ControlProperties } from '../../../../src/app/core/schema/controlProperties';

export interface Permisos {
    idPerfil?: number;
    idModulo?: number;
    descripcionPerfil?: string;
    descripcionModulo?: string;
    inBaja?: number;
    crear?: ControlProperties;
    actualizar?: ControlProperties
    ver?: ControlProperties;
    anular?: ControlProperties;
    descripcionEstado?: string;
    usuarioCreacion?: string;
    fechaCreacion?: string;
    ipCreacion?: string;
    usuarioModificacion?: string;
    fechaModificacion?: string;
    ipModificacion?: string;
    codigoMensaje?: string;
    listaMenu?: Menu[];
    lstSubMenu?: SubMenu[];
    lstControlsPerfil?: Control[];
    listaMenuSel?: SubMenu[];
    lstPermisoSel?: Control[];
}
