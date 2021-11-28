
import { __assign } from 'tslib';
import { UsuarioBean } from '../config/model/usuarioBean'
import { ConfigPageControl } from './model/configPageControl';
export function obtenerUsuarioAcceso(nuOpcion: string): ConfigPageControl[] {
    let configPageControl: ConfigPageControl[];

    const lstConfigPageControl: ConfigPageControl[] = JSON.parse(sessionStorage.getItem('lstConfigPageControl'));
    if (lstConfigPageControl) {
        let controls: any = lstConfigPageControl.filter(tree => tree.nuOpcion.includes(nuOpcion));
        if (controls) {
            if (controls.length > 0) {
                configPageControl = controls
            }

        }
    }
    return configPageControl;
}
