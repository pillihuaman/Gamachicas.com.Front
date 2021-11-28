import {Component, Input, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {DataService} from '../../services/data.service';
import {ConfigPageControl} from '../../config/model/configPageControl';
import {obtenerUsuarioAcceso} from "../../config/utilitarios";

@Component({
    selector: 'app-button',
    templateUrl: './button.component.html',
    styleUrls: ['./button.component.scss']
})

export class ButtonComponent implements OnInit {

    @Input() id: string;
    @Input() class: string;
    @Input() pbutton: false;
    @Input() pRipple: false;
    @Input() icon: string;
    @Input() style: string;
    nuOpcion: string;
    configPageControl: ConfigPageControl;
    subscription: Subscription;

    constructor(private dataService: DataService) {
    }

    ngOnInit(): void {

        this.subscription = this.dataService.currentinfo.subscribe(nuOpcion => this.nuOpcion = nuOpcion)
        let lstconfigPage: ConfigPageControl[] = obtenerUsuarioAcceso(this.nuOpcion);
        if (lstconfigPage) {
            if (lstconfigPage.length > 0) {
                let configCOntro: ConfigPageControl[] = lstconfigPage.filter(tree => tree.idControl === this.id);
                if (configCOntro) {
                    if (configCOntro.length > 0) {
                        this.configPageControl = configCOntro[0];
                    }
                }
            }
        }
    }

    ngOnDestroy() {
        this.subscription.unsubscribe();
    }
}
