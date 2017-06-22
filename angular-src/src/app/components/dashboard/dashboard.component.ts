import { Component, OnInit, ViewContainerRef, Input, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'
import { Options } from 'fullcalendar';
import {Observable} from 'rxjs/Rx';
import * as moment from 'moment';
import 'fullcalendar';
import _ from 'lodash';
import * as $ from 'jquery';
import 'fullcalendar/dist/locale-all.js';
import { User } from '../../variables/user'
import { Event } from '../../variables/event'

declare var jQuery: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent implements OnInit {

  //Variables
  duration: number;
  id: String;
  title: String;
  start: String;
  end: String;
  color: String;
  description: String;
  rekisteriNro: String;
  eventUsername: String;
  confirm: Boolean = true;
  admin: Boolean = false;
  calElement = null;
  events: Event[];
  event: Event

  constructor(
       private authService: AuthService,
       private flashMessage: FlashMessagesService,
       private router: Router) { }

  ngOnInit() {
    var curuser = this.authService.getUser();
    var userId = curuser.id;
    this.admin = curuser.admin;

    this.calElement = $('#myCalendar');

    //Event click function
    let clickFunc = function(calEvent, jsEvent, view) {
      if (calEvent.title) {

        var tempcolor = calEvent.backgroundColor;
        calEvent.backgroundColor = "#133313";
        this.calElement.fullCalendar('updateEvent', calEvent)
        calEvent.backgroundColor = tempcolor;
        if (calEvent.user) {
          this.updatename(calEvent);
        } else {
          this.eventUsername = 'Hallinnon luoma';
        }
        this.confirm = calEvent.confirm;
        this.id = calEvent._id;
        this.rekisteriNro = calEvent.rekisteriNro;
        this.description = calEvent.description;
        this.title = calEvent.title;
        this.end = moment(calEvent.end).format('YYYY-MM-DD[T]HH:mm');
        this.start = moment(calEvent.start).format('YYYY-MM-DD[T]HH:mm');
        this.calElement.fullCalendar('unselect')
        this.calElement.fullCalendar('renrender')
      }

    };

    let boundClick = clickFunc.bind(this);
    //options
    let options: any = {
      header: {
        left: 'prev,next today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },

      events: function(start, end, timezone, callback) {

        end = moment(end).add(6, 'hours').format('YYYY-MM-DD[T]HH:mm');
        start = moment(start).subtract(6, 'hours').format('YYYY-MM-DD[T]HH:mm');

        $.ajax({
          url: 'http://localhost:8081/events/getevents/' //'http://localhost:8081/' for local deployement empty for heroku.
          + start + "/" + end + "/" + userId + "/" + true,
          dataType: 'json',
          success: function(response) {
            if (!curuser.admin) {
              response.forEach(event => {

                if ((event.user != curuser.id || event.user == null)) {
                  event.backgroundColor = '#71893f';
                  event.rendering = 'background';
                }
                else if (event.confirm == false) {
                  event.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                  event.textColor = '#111'
                }
                else if (event.confirm == true) {
                  event.backgroundColor = 'rgba(0, 170, 0, 0.7)';
                }

              });
            } else {
              response.forEach(event => {
                if (event.confirm == false) {
                  event.backgroundColor = 'rgba(0, 0, 0, 0.3)';
                  event.textColor = '#111'
                }
              });
            }
            callback(response)
          }
        });
      },
      businessHours: {
        dow: [1, 2, 3, 4, 5],
        start: '7:00',
        end: '18:00',
      },

      validRange: function(nowDate) {
        return {
          start: moment(),
          end: nowDate.clone().add(60, 'days')
        };
      },
      hiddenDays: [0, 6],
      locale: 'fi',
      minTime: "07:00:00",
      maxTime: "18:00:00",
      allDaySlot: false,
      height: 'auto',
      selectable: false,
      defaultView: 'agendaWeek',
      timeFormat: 'H:mm',
      slotLabelFormat: 'H:mm',
      aspectRatio: 1,
      fixedWeekCount: false,
      selectHelper: true,
      unselectAuto: false,
      nowIndicator: true,
      selectConstraint: 'businessHours',
      eventConstraint: 'businessHours',
      eventClick: boundClick,
      //Event selection based on selected type of event.
      dayClick: (date, jsEvent, view) => {

        this.eventUsername = null;

        this.checkOverlap(date, moment(date).add(this.duration, 'hours')).then(res => {

          if (view.type == 'month') {
            this.calElement.fullCalendar('changeView', 'agendaWeek');
            this.calElement.fullCalendar('gotoDate', date);
          } else {

            this.calElement.fullCalendar('rerenderEvents');

            if (this.title == undefined) {
              this.flashMessage.show('Valitse toimenpide', { cssClass: 'alert-danger', timeout: 3000 });
            }

            else if (res >= 2) {
              this.flashMessage.show('Et voi varata yli 2 päällekkäistä tapahtumaa', { cssClass: 'alert-danger', timeout: 3000 });
              this.calElement.fullCalendar('unselect');
              this.id = null;
              this.start = null;
              this.end = null;
            }

            else if (res < 2) {

              if (moment(date).add(this.duration, 'hours').get('hour') >= 18 &&
                moment(date).add(this.duration, 'hours').get('minute') == 30 ||
                moment(date).add(this.duration, 'hours').get('hour') > 18 ||
                moment(date).add(this.duration, 'hours').get('hour') < 7) {
                this.flashMessage.show('Aika menee aukiolo ajan yli', { cssClass: 'alert-danger', timeout: 3000 });
                this.id = null;
                this.start = null;
                this.end = null;
              }
              else {
                this.id = null;
                this.start = moment(date).format('YYYY-MM-DD[T]HH:mm');
                this.end = moment(this.start).add(this.duration, 'hours').format('YYYY-MM-DD[T]HH:mm');
                this.calElement.fullCalendar('select', this.start, this.end);
              }
              this.onTitleChange();
            }
          }
        });
      }
    };
    //options end and create calendar
    this.calElement.fullCalendar(options);
  }

  //Event delete
  onDeleteClick() {
    var Id = this.id;

    if (Id) {
      this.authService.delEvent(Id).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
          this.calElement.fullCalendar('removeEvents', Id);
        } else {
          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        }
      });
    } else {
      this.flashMessage.show('Valitse tapahtuma', { cssClass: 'alert-danger', timeout: 3000 });
    }
  }

  onConfirmClick() {
    this.authService.confirmEvent(this.id).subscribe(res => {
      this.calElement.fullCalendar('refetchEvents')
      this.flashMessage.show('Varaus Hyväksytty', { cssClass: 'alert-success', timeout: 3000 })
    });
  }


  //changes color according to selection
  onTitleChange() {

    switch (this.title) {

      case 'öljynvaihto': {
        this.color = '#3a87ad';
        this.duration = 1;
        break;
      }
      case 'renkaidenvaihto': {
        this.color = '#009933';
        this.duration = 1;
        break;
      }
      case 'huolto': {
        this.color = '#cc0000';
        this.duration = 6;
        break;
      }
      case 'korjaus': {
        this.color = '#999922';
        this.duration = 8;
        break;
      }
    }
    if ((this.start != undefined || this.id != undefined)) {
      this.end = moment(this.start).add(this.duration, 'hours').format('YYYY-MM-DD[T]HH:mm');
      this.calElement.fullCalendar('select', this.start, this.end);
      this.checkOverlap(this.start, moment(this.start).add(this.duration, 'hours')).then(res => {
        if (res >= 2) {
          this.flashMessage.show('Et voi varata yli 2 päällekkäistä tapahtumaa', { cssClass: 'alert-danger', timeout: 3000 });
          this.calElement.fullCalendar('unselect');
          this.id = null;
          this.start = null;
          this.end = null;
        }
        if (moment(this.start).add(this.duration, 'hours').get('hour') >= 18 &&
          moment(this.start).add(this.duration, 'hours').get('minute') == 30 ||
          moment(this.start).add(this.duration, 'hours').get('hour') > 18 ||
          moment(this.start).add(this.duration, 'hours').get('hour') < 7) {
          this.flashMessage.show('Aika menee aukiolo ajan yli', { cssClass: 'alert-danger', timeout: 3000 });
          this.calElement.fullCalendar('unselect');
          this.id = null;
          this.start = null;
          this.end = null;
        }
      })
    }
  }


  //Event adding func
  onEventSubmit() {
    var curuser = this.authService.getUser();
    var user: String;

    const event = {
      _id: this.id,
      title: this.title,
      start: this.start,
      end: this.end,
      backgroundColor: this.color,
      rekisteriNro: this.rekisteriNro,
      description: this.description,
      confirm: false,
      user: curuser['id']
    }
    if (event.title && event.start) {
      this.authService.addEvent(event).subscribe(data => {
        if (data.success) {
          this.flashMessage.show(data.msg, { cssClass: 'alert-success', timeout: 3000 });
          this.calElement.fullCalendar('refetchEvents');
          this.calElement.fullCalendar('unselect');
        } else {

          this.flashMessage.show(data.msg, { cssClass: 'alert-danger', timeout: 3000 });
        }
      });
    } else {
      this.flashMessage.show('Anna toimenpide ja ajat', { cssClass: 'alert-danger', timeout: 3000 });
    }
  }

  //gets name whoever owns event
  updatename(event) {
    this.authService.getUserById(event).subscribe(user => {
      this.eventUsername = user.username;
    });
  }

  checkOverlap(start, end) {
    return new Promise((resolve, reject) => {

      var user = null;
      var queryStart = moment(start).subtract(12, 'h');
      var queryEnd = moment(end).add(12, 'h');
      var admin = true;

      var overlapsCounter = 0;
      var overlapsStart: any[] = [];
      var overlapsEnd: any[] = [];
      var overlaps: number[];
      var overlaped;

      overlaps = new Array(10).fill(0);

      start = moment(start).format('YYYY-MM-DD[T]HH:mm');
      end = moment(end).format('YYYY-MM-DD[T]HH:mm');


      this.authService.getEvents(moment(queryStart).format('YYYY-MM-DD[T]HH:mm'),
        moment(queryEnd).format('YYYY-MM-DD[T]HH:mm'),
        user, admin).subscribe(events => {
          events.forEach(event => {
            if (moment(start).isBetween(event.start, event.end)) {

              //tallennetaan ajat.
              overlapsStart[overlapsCounter] = event.start;
              overlapsEnd[overlapsCounter] = event.end;
              overlaped = true;
              overlapsCounter++;
            }

            else if (moment(end).isBetween(event.start, event.end)) {

              //tallennetaan ajat.
              overlapsStart[overlapsCounter] = event.start;
              overlapsEnd[overlapsCounter] = event.end;
              overlaped = true;
              overlapsCounter++;
            }

            //jokaiselle eventille jos joku eventti valinnan sisällä.
            else if (moment(event.end).isBetween(start, end, null, '[]') &&
              moment(event.start).isBetween(start, end, null, '[)')) {

              //tallennetaan ajat.
              overlapsStart[overlapsCounter] = event.start;
              overlapsEnd[overlapsCounter] = event.end;
              overlaped = true;
              overlapsCounter++;
            }
          });

          let counter1 = 0;

          //jokaiselle eventille jotka ovat valinnan välissä.
          overlapsStart.forEach(eventti => {

            //otetaan ajat talteen silmukkaa varten.
            var currentStart = overlapsStart[counter1];
            var currentEnd = overlapsEnd[counter1];

            overlapsStart.forEach(event => {

              let counter2 = 0;

              if (counter2 == counter1) {
                counter2++;
              }

              if (moment(currentStart).isBetween(event, overlapsEnd[counter2], null, '[)')
                || moment(currentEnd).isBetween(event, overlapsEnd[counter2])) {
                overlaps[counter1]++;
              }

              counter2++;
            });

            counter1++;
          });
          if (overlaped && overlaps[0] == 0) overlaps[0] = 1;

          resolve(Math.max.apply(null, overlaps));
        });
    });
  }
}
