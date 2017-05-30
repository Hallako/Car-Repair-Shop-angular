import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { AuthService } from '../../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages'
import { Router } from '@angular/router'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    name: String;
    username: String;
    email: String;
    password: String;

  constructor(
       private validateService: ValidateService,
       private flashmessage: FlashMessagesService,
       private authService: AuthService,
       private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){

      const user = {
        name: this.name,
        email: this.email,
        username: this.username,
        password: this.password
      }

    //check that username is unique (returns true if exists and vice versa)
    this.authService.checkUsername(user).subscribe(res=> {

      if(res.exists == false){

        //check form
        if(!this.validateService.validateRegister(user)){
            this.flashmessage.show('Fill in all Fields', {cssClass: 'alert-danger', timeout:3000});
            return false;  
        }
        if(!this.validateService.validateEmail(user.email)){
            this.flashmessage.show('Enter a valid email', {cssClass: 'alert-danger', timeout:3000});
            return false;  
        }
        
        //register user
        this.authService.registerUser(user).subscribe(data => {
            if(data.success){
                this.flashmessage.show('Registered succesfully', {cssClass: 'alert-success', timeout:3000});
                this.router.navigate(['/login']);
            } else {
                this.flashmessage.show('Something went wrong', {cssClass: 'alert-danger', timeout:3000});
                this.router.navigate(['/register']);
            }
        });
    } else {
      this.flashmessage.show('Käyttäjänimi on jo käytössä', {cssClass: 'alert-danger', timeout:3000});
    }
    });
  }
}