import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages'
import { Router } from '@angular/router'
<<<<<<< HEAD
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
=======
import { User } from '../../variables/user'

>>>>>>> refs/remotes/Hallako/master

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

<<<<<<< HEAD
    registerForm: FormGroup;
=======
name: String;
username: String;
email: String;
password: String;
>>>>>>> refs/remotes/Hallako/master

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
           username: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
           password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
           passwordConfirm: ['', Validators.compose([Validators.required, Validators.minLength(4)])]
         }, {validator: this.areEqual})
       }

  ngOnInit() {
  }

  areEqual(group: FormGroup) {
    return group.get('password').value === group.get('passwordConfirm').value
      ? null : {'mismatch': true}
  }

  onRegisterSubmit(){

<<<<<<< HEAD
      const user = {
        firstname: this.registerForm.get('firstname').value,
        lastname: this.registerForm.get('lastname').value,
        email: this.registerForm.get('email').value,
        username: this.registerForm.get('username').value,
        password: this.registerForm.get('password').value
      }
=======
    const user = {
  name: this.name,
  email: this.email,
  username: this.username,
  password: this.password
}
>>>>>>> refs/remotes/Hallako/master

      console.log(user);
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
