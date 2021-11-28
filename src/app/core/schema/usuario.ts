import { Empresa } from "./empresa";
import { UsuarioEmpresa } from "./usuario-empresa";
export interface Usuario {
    idUsuario?: number;
    deUsuario?: string;
    deClave?: string;
    idEmpresa?: number;
    idPerfil?: number;
    desPerfil?: string;
    inBaja?: string;
    idUsuaCrea?: string;
    deUsuaCreaIp?: string;
    idUsuaModi?: string;
    deUsuaModiIp?: string;
    estado?: string;
    tipo?: string;
    idEstado?: number;
    deEstado?: string;
    apeMaterno?: string;
    apePaterno?: string;
    correo?: string;
    deEmpresa?: string;
    deTipoUsuario?: string;
    idTipoUsuario?: number;
    nombreUsuario?: string;
    password?: string;
    idSistema?: number;
    descripcionSistema?: string;
    deCargo?: number

    listaUsuarioEmpresa?: UsuarioEmpresa[];
}


