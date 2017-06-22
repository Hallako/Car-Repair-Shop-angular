import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Location } from '@angular/common';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  username: String;
  password: String;

  constructor(private authService: AuthService,
    private router: Router,
    private flashMessage: FlashMessagesService,
    private location: Location
  ) { }

  ngOnInit() {
  }

  onLoginSubmit() {
    const user = {
      username: this.username,
      password: this.password
    }
    if (this.username == undefined || this.password == undefined) {
      this.flashMessage.show('Anna käyttäjänimi ja salasana!', {
        cssClass: 'alert-danger',
        timeout: 3000
      })
    }
    else {
      this.authService.authenticateUser(user).subscribe(data => {
        if (data.success) {
          this.authService.storeUserData(data.token, data.user);
          this.flashMessage.show('you are now logged in', {
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
  }
}
