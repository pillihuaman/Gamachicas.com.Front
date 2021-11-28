import { Usuario } from '../../schema/usuario';
import { ConfigPageControl } from '../../config/model/configPageControl'

export interface UsuarioBean extends Usuario {
  id: string;
  configPageControl: ConfigPageControl;
}