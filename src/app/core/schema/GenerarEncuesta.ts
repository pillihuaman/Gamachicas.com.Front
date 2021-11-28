import {Periodo} from './periodo';
import {Empresa} from "./empresa";
import {Sistema} from "./sistema";

export interface GenerarEncuesta {
    lstPeriodo?: Periodo[];
    lstPeriodoOld?: Periodo[];
    lstEmpresa?: Empresa[];
    lstSistema?: Sistema[];
}
