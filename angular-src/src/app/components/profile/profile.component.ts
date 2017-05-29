import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages'
import { Router } from '@angular/router'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:Object;

  newPassword:String;
  newPassword2:String;

  constructor(
    private authService: AuthService,
    private flashmessage: FlashMessagesService,
    private router: Router) { }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    },
    err => {
      console.log('error');
      return false;
    });


  }

  onPasswordChange(){
    this.newPassword;
    this.newPassword2;

    let user = {
      id: this.authService.getUser().id,
      password: this.newPassword
    };

    if (this.authService.loggedIn()) {
      if (this.newPassword == this.newPassword2) {
        this.authService.changePassword(user).subscribe(res => {
          this.flashmessage.show(res, {cssClass: 'alert-success', timeout:3000});;
          location.reload();
        });
      } else {
        this.flashmessage.show('Vahvista salasana', {
          cssClass: 'alert-danger',
          timeout: 3000
        });
        }
    }
  }
}
