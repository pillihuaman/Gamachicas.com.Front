import { Component, OnInit } from '@angular/core';
import { Observable, Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.scss']
})
export class UserRegisterComponent implements OnInit {
  title: String = "Register users"
  changebottonStyle: boolean = false;
  observableTimer: Observable<number> = timer(0, 1);
  private subscription: Subscription;
  constructor() { }

  ngOnInit(): void {
    //this.observableTimer.subscribe(
     // x => console.log(x));

  }
  ngOnDestroy() {


  }

  CambiarEstilo() {
    return {
      btn: true,
      'btn-primary': true,
      'newtheme': this.changebottonStyle
    }
  }
  submit() {

    console.log('button submit');
  }
  activar() {

    this.changebottonStyle = true;


  }

}
