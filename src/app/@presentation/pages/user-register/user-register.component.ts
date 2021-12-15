import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Observable, Subscription, timer, of } from 'rxjs';
import { User } from 'src/app/@data/model/User/user';
import { map, startWith } from 'rxjs/operators';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select'

  ;


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
  listSex: any[];
  user: User;
  form: FormGroup;
  myControl = new FormControl();
  options: string[] = ['One', 'Two', 'Three'];
  filteredOptions: Observable<string[]>;

  constructor() { }

  ngOnInit(): void {
    //this.observableTimer.subscribe(
    // x => console.log(x));

    this.listSex = [
      { description: 'Woman', value: 0, position: 1 },
      { description: 'Man', value: 1, position: 2 },
    ];
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value))
    );

  }
  ngOnDestroy() {


  }
  initForm() {

    this.form = new FormGroup({
      name: new FormControl(),
      lastName: new FormControl(),
      code: new FormControl(''),
      password: new FormControl('', [Validators.required, Validators.maxLength(15)]),
      estatus: new FormControl(''),
      documentoNumber: new FormControl('', [Validators.required, Validators.maxLength(10)]),
      personID: new FormControl(''),
      email: new FormControl(''),
      phoneNumber: new FormControl(''),
      rolId: new FormControl(''),
      inputFormControl: new FormControl(''),
    })
    //this.user.code = new FormControl('', [Validators.required, Validators.maxLength(15)]);


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
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }


}
