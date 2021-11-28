import {Menu} from './menu';
import { Empresa } from "./empresa";
import { UsuarioEmpresa } from "./usuario-empresa";
export interface UserLogin {

    idUsuario?: number;
    username?: string;
    estado?: string;
    nombre?: string;
    apellidoPaterno?: string;
    apellidoMaterno?: string;
    correo?: string;
    listaMenu?: Menu[];
    deEmpresa?: string,
    lstUsuarioEmpresa?: number
}
