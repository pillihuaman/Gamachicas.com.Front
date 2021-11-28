import { ControlDetalle } from "./controlDetalle";

export interface Control {
    idSubMenu?: number;
    nombreSubMenu?: string;
    iconoSubMenu?: string;
    listaControls: ControlDetalle[];

}
