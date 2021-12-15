import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserRepository } from 'src/app/@domain/repository/userRepository';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  appName: string = "Gamachicas.com";
  logging: boolean = false;
  loginForm: FormGroup = this.formBuilder.group({
    user: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(15)],],
    password: ['', [Validators.required, Validators.minLength(7), Validators.maxLength(30)],],
  });

  constructor(private formBuilder: FormBuilder, private userRepository: UserRepository) { }
  ngOnInit(): void { }
  login() {
    let user = this.loginForm.get("user")?.value;
    let passwor = this.loginForm.get("password")?.value;
    this.logging = true;
    this.userRepository.login(user, passwor).subscribe(
      (res) => {
        this.logging = false;
      },
      (err) => {
        this.logging = false;
      }
    );


  }

}
