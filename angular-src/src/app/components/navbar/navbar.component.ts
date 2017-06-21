import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Subscription }   from 'rxjs/Subscription';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output()
  loggedout: EventEmitter<boolean> = new EventEmitter<boolean>();
  sendlogout(){
    console.log('logout emit')
    this.loggedout.emit(true);
  }

  admin: Boolean = false;
  subscription: Subscription

  constructor(private authService:AuthService,
              private router:Router,
              private flashMessage:FlashMessagesService

            ) {}

  ngOnInit() {
  }


  onLogoutClick(){
    this.authService.logout();
    this.flashMessage.show('Olet nyt kirjautunut ulos.',{
      cssClass:'alert-success',
      timeout: 3000
    });
    this.sendlogout();
    
    this.router.navigate(['/login']);
    return false;
  }

}
