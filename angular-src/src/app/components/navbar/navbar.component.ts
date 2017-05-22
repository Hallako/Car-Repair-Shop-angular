import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

admin: Boolean

  constructor(private authService:AuthService,
              private router:Router,
              private flashMessage:FlashMessagesService
              ) { }

  ngOnInit() {
      this.admin = this.authService.getUser().admin;
  }

  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('You are now logged out',{
      cssClass:'alert-success',
      timeout: 3000
    });
    this.router.navigate(['/login']);
    return false;
  }

}
