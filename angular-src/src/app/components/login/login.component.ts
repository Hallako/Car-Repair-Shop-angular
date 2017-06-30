import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  showReset: boolean = false;

  loginForm: FormGroup;
  resetForm: FormGroup;

  constructor(private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private location: Location,
    private fb: FormBuilder) {
    this.loginForm = fb.group({
      login: ['', Validators.compose([Validators.required])],
      password: ['', Validators.compose([Validators.required])],
    })

    this.resetForm = fb.group({
      resetEmail: ['', Validators.compose([Validators.required, Validators.email])],
    })
  }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      login: this.loginForm.get('login').value,
      password: this.loginForm.get('password').value
    }

    this.authService.authenticateUser(user).subscribe(data => {
      if (data.success) {
        this.authService.storeUserData(data.token, data.user);
        this.flashMessage.show('Kirjautuminen onnistui', {
          cssClass: 'alert-success',
          timeout: 3000
        });
        this.router.navigate(['dashboard']);
      } else {
        this.flashMessage.show(data.msg, {
          cssClass: 'alert-danger',
          timeout: 3000
        });
        this.router.navigate(['login']);
      }
    });
  }

  //TODO: Salasanan resetointi
  onResetSubmit() {

    const email = this.resetForm.get('resetEmail').value;

    this.authService.resetPassword(email).subscribe(data => {
      if (data.success) {
        console.log("toimii");
      }
      else {
        console.log("ei toimi");
      }
    })
  }
}
