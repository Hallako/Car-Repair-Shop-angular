import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages'
import { Router } from '@angular/router'
import { Event } from '../../variables/event'
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})

export class ProfileComponent implements OnInit {

  user: Object;

  events: Event[];
  changePwForm : FormGroup;

  constructor(
    private authService: AuthService,
    private flashmessage: FlashMessagesService,
    private router: Router,
    private fb: FormBuilder)
    {
      this.changePwForm = fb.group({
      password: ['', Validators.compose([Validators.required, Validators.minLength(4)])],
      passwordConfirm: ['', Validators.compose([Validators.required])]
    }, {validator: this.areEqual})
    }

  ngOnInit() {
    this.authService.getProfile().subscribe(profile => {
      this.user = profile.user;
    });

    this.authService.getAllEvents(this.authService.getUser().id).subscribe(events => {
      this.events = events;
      this.events.forEach(event => {
        event.start = moment(event.start).format('DD.MM.YYYY [klo] HH:mm');
        event.end = moment(event.end).format('DD.MM.YYYY [klo] HH:mm');
      });
    })
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

  onPasswordChange() {
    let user = {
      id: this.authService.getUser().id,
      password: this.changePwForm.get('password').value
    };

    if (this.authService.loggedIn()) {
        this.authService.changePassword(user).subscribe(res => {
          this.flashmessage.show(res, { cssClass: 'alert-success', timeout: 3000 });;
        });
      }
    }
  }
