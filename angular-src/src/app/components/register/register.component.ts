import { Component, OnInit } from '@angular/core';
import { ValidateService } from '../../services/validate.service'
import { AuthService } from '../../services/auth.service'
import { FlashMessagesService } from 'angular2-flash-messages'
import { Router } from '@angular/router'
import { User } from '../../variables/user'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    user: User;

  constructor(
       private validateService: ValidateService,
       private flashmessage: FlashMessagesService,
       private authService: AuthService,
       private router: Router) { }

  ngOnInit() {
  }

  onRegisterSubmit(){


    //check that username is unique (returns true if exists and vice versa)
    this.authService.checkUsername(this.user).subscribe(res=> {

      if(res.exists == false){

        //Validate given information
        if(!this.validateService.validateRegister(this.user)){
            this.flashmessage.show('Täytä kaikki kentät', {cssClass: 'alert-danger', timeout:3000});
            return false;
        }
        if(!this.validateService.validateEmail(this.user.email)){
            this.flashmessage.show('Anna oikea sähköposti', {cssClass: 'alert-danger', timeout:3000});
            return false;
        }

        //register user
        this.authService.registerUser(this.user).subscribe(data => {
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
