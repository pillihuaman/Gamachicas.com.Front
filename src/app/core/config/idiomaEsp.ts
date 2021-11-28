import {PrimeNGConfig} from 'primeng/api';

export class IdiomaEsp {
    static idiomaEsp(config: PrimeNGConfig): PrimeNGConfig {
        config.setTranslation({
            apply: 'Aplicar',
            clear: 'Limpiar'
        });
        return config;
    }
}
