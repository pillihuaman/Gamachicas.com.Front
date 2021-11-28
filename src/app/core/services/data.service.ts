import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


@Injectable({
    providedIn: 'root'
})
export class DataService {
    private shareInfo = new BehaviorSubject('');
    currentinfo = this.shareInfo.asObservable();
    currentNivelMadurez = this.shareInfo.asObservable();

    constructor() {
        console.log(this.currentinfo);
        console.log(this.currentNivelMadurez);

    }

    changeInfo(info: string) {
        this.shareInfo.next(info)
    }


}
