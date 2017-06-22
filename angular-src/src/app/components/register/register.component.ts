import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages'
import { Router } from '@angular/router'

import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

registerForm: FormGroup;

  constructor(
       private flashmessage: FlashMessagesService,
       private authService: AuthService,
       private router: Router,
       private fb: FormBuilder)
       {
         this.registerForm = fb.group({
           firstname: ['', Validators.compose([Validators.required])],
           lastname: ['', Validators.compose([Validators.required])],
           email: ['', Validators.compose([Validators.required, Validators.email])],
           phone: ['', Validators.compose([Validators.required, Validators.pattern("[+-\d]+")])],
           address: ['', Validators.compose([Validators.required])],
           area: ['', Validators.compose([Validators.required, Validators.pattern("[0-9]+"), Validators.minLength(5)])],
           city: ['', Validators.compose([Validators.required])],
           username: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
           password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
           passwordConfirm: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
         }, {validator: this.areEqual})
       }

  ngOnInit() {
  }

  areEqual(AC: AbstractControl) {
    let password = AC.get('password').value;
    let passwordConfirm = AC.get('passwordConfirm').value;

    if (password != passwordConfirm) {
      AC.get('passwordConfirm').setErrors( {areEqual: true} );
    }
    else {
      return null;
    }
  }

  onRegisterSubmit(){

      const user = {
        firstname: this.registerForm.get('firstname').value,
        lastname: this.registerForm.get('lastname').value,
        email: this.registerForm.get('email').value,
        phone: this.registerForm.get('phone').value,
        address: this.registerForm.get('address').value,
        area: this.registerForm.get('area').value,
        city: this.registerForm.get('city').value,
        username: this.registerForm.get('username').value,
        password: this.registerForm.get('password').value
      }

    //check that username is unique (returns true if exists and vice versa)
    this.authService.checkUsername(user).subscribe(res=> {

      if(res.exists == false) {

        //register user
        this.authService.registerUser(user).subscribe(data => {
            if(data.success){
                this.flashmessage.show('Rekisteröity onnistuneesti', {cssClass: 'alert-success', timeout:3000});
                this.router.navigate(['/login']);
            } else {
                this.flashmessage.show('Jokin meni vikaan', {cssClass: 'alert-danger', timeout:3000});
                this.router.navigate(['/register']);
            }
        });
    } else {
      this.flashmessage.show('Käyttäjänimi on jo käytössä', {cssClass: 'alert-danger', timeout:3000});
    }
    });
  }
}
