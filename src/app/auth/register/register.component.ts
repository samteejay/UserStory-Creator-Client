import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  userForm = new FormGroup({
    fullname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
    repeatPassword: new FormControl('', [Validators.required, this.passwordsMatch])
  });
  
  constructor(private router: Router) {
      console.log('userform', this.userForm);
     }

  ngOnInit() {
  }

  passwordsMatch(control: FormControl) {
    let password = control.root.get('password');
    return password && control.value !== password.value
        ? {
            passwordMatch: true
          }
        : null;
  }
  
/*
  register() {
    if (!this.userForm.valid) {
      return;
    }

    const user = this.userForm.getRawValue();
    this.authService
      .register(user)
      .subscribe(s=> this.router.navigate(['/login']));
  }

  

  get fullname() {
    return this.userForm.get('fullname');
  }

  get email() {
    return this.userForm.get('email');
  }

  get password() {
    return this.userForm.get('password');
  }

  get repeatPassword() {
    return this.userForm.get('repeatPassword');
  }

  */
}
