import { Component, OnInit, AfterViewChecked, ElementRef, ViewChild } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router, NavigationStart, Event } from '@angular/router';
import * as io from "socket.io-client";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})

export class ChatComponent implements OnInit, AfterViewChecked {

  @ViewChild('scrollMe') private myScrollContainer: ElementRef;

  Admin: boolean;
  Hidden: boolean;
  chats: any = [];
  user: any;
  joinned: boolean = false;
  newUser = { nickname: '', room: '' };
  msgData = { room: '', nickname: '', message: '' };
  socket = io('http://localhost:8081/'); //'http://localhost:8081/' for local deployement empty for heroku.

  constructor(private chatService: ChatService,
    private authservice: AuthService,
    private flashMessage: FlashMessagesService,
    private router: Router) {
    router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (event.url == "/login") {
          this.logout();
        }
      }
    });
  }

  ngOnInit() {

    this.user = this.authservice.getUser();
    this.Admin = this.user.admin;

    if (this.Admin) {
      this.newUser.nickname = 'Asiakaspalvelu ' + this.user.firstname + ' ' + this.user.lastname
    } else {
      this.newUser.nickname = this.user.firstname + ' ' + this.user.lastname;
    }

    var user = JSON.parse(localStorage.getItem("userr"));

    if (user !== null) {
      this.msgData = { room: null, nickname: this.newUser.nickname, message: '' }
      //this.joinned = true;
      this.scrollToBottom();
    }

    //###### SOCKETS ########

    this.socket.on('new-message', function(data) {
      if (data.message.room === JSON.parse(localStorage.getItem("userr")).room) {
        this.chats.push(data.message);
        this.msgData = { room: this.newUser.room, nickname: this.newUser.nickname, message: '' }
        this.scrollToBottom();
      }
    }.bind(this));


    //On disconnect
    this.socket.on('disconnected', function(data) {
      this.socket.emit('disconnectrelease', { room: this.newUser.room, admin: this.user.admin });
    }.bind(this));

    //User leave callback
    this.socket.on('userleavedroom', function(data) {
      this.chats = [];
      this.flashMessage.show('Asiakas on poistunut keskustelusta', { cssClass: 'alert-danger', timeout: 3000 });
    }.bind(this));


    //Admin connect callback
    this.socket.on('adminconn-response', function(data) {
      localStorage.setItem("userr", JSON.stringify(this.newUser));
      this.getChatByRoom(this.newUser.room);
    }.bind(this));

    //Admin leave callback
    this.socket.on('releasesocket', function(data) {
      if (!this.user.admin) {
        this.socket.emit('userdisconnect', { room: data.room, userleaved: false });
        this.newUser.room = '';
        this.msgData.room = '';

        this.flashMessage.show('Asiakaspalvelussa tapahtui odottamaton virhe, yhteys on katkennut.', { cssClass: 'alert-danger', timeout: 6000 });
        this.Hidden = false;
        this.joinned = false;

        localStorage.setItem("userr", JSON.stringify(this.newUser));
      }
    }.bind(this));

    //User connection callback
    this.socket.on('userconn-response', function(data) {
      if (data.available == true) {
        this.newUser.room = data.room;
        this.msgData.room = data.room;
        this.joinned = true;

        if (this.user.admin) {
          this.socket.emit('adminjoin', data.room);
          localStorage.setItem("userr", JSON.stringify(this.newUser));
          this.getChatByRoom(this.newUser.room);

        } else {
          localStorage.setItem("userr", JSON.stringify(this.newUser));
          this.getChatByRoom(this.newUser.room);
          this.flashMessage.show('Yhditetty asiakaspalveluun', { cssClass: 'alert-success', timeout: 3000 });
        }
      } else {
        this.flashMessage.show('Henkilökuntaa ei ole tavoitettavissa', { cssClass: 'alert-danger', timeout: 3000 });
        this.Hidden = false;
        this.joinned = false;
      }
    }.bind(this));

    //Ngoninit END
  }

  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) { }
  }

  getChatByRoom(room) {
    this.chatService.getChatByRoom(room).then((res) => {
      if (res) {
        this.chats = res;
      } else {
        this.chats = [];
      }
    }, (err) => {
      console.log(err);
    });
  }

  admincreateRoom() {
    var date = new Date();

    this.msgData = { room: this.newUser.room, nickname: this.newUser.nickname, message: '' };
    this.newUser.room = this.user.username;
    localStorage.setItem("userr", JSON.stringify(this.newUser));
    this.socket.emit('admincreateroom', {
      room: this.newUser.room, nickname: this.newUser.nickname, message: 'Join this room',
      updated_at: date, user: this.user.username, admin: true
    });
    this.joinned = true;
  }

  createRoom() {
    var date = new Date();
    this.msgData = { room: this.newUser.room, nickname: this.newUser.nickname, message: '' };
    localStorage.setItem("userr", JSON.stringify(this.newUser));
    this.socket.emit('userjoin', {
      room: this.newUser.room, nickname: this.newUser.nickname, message: 'Join this room',
      updated_at: date, user: this.user.username, admin: false
    });
  }

  sendMessage() {
    if (this.msgData.room && this.msgData.message) {
      this.chatService.saveChat(this.msgData).then((result) => {
        this.socket.emit('save-message', result);
        this.msgData.message = null;
      }, (err) => {
        console.log(err);
      });
    }
  }

  logout() {
    var date = new Date();
    var user = JSON.parse(localStorage.getItem("userr"));

    if (this.user.admin) {
      this.socket.emit('adminleaveroom', { room: this.newUser.room, nickname: this.newUser.nickname, message: 'Left this room', updated_at: date });
    } else {
      this.socket.emit('userdisconnect', { room: this.newUser.room, nickname: this.newUser.nickname, message: 'Left this room', updated_at: date });
    }

    this.chats = null;
    this.newUser.room = "";
    this.joinned = false;
    this.Hidden = true;
    localStorage.removeItem("userr");
  }

  togglehide() {
    if (this.Hidden == true) {
      this.Hidden = false;
    } else {
      this.Hidden = true;
    }
  }
}
