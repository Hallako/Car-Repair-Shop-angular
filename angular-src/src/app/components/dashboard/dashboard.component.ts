import { Component, OnInit, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CalendarEvent } from 'angular-calendar';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'
import { Options } from 'fullcalendar';
import {Observable} from 'rxjs/Rx';
import * as moment from 'moment';
import 'fullcalendar';
import _ from 'lodash';
import * as $ from 'jquery';
import 'fullcalendar/dist/locale-all.js';
import { Event } from '../admin/event'

declare var jQuery: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    //Variables
    id: String;
    title: String;
    start: String;
    end: String;
    color: String;
    description: String;
    eventUsername: String;
    TempEvent:any;

    admin: Boolean = false;
    calElement = null;
    events: Event[];


    //declaring emitters
    @Output('event-click')
    eventClick = new EventEmitter();

    @Output('select-changed')
    selectionChanged = new EventEmitter();

  constructor(private validateService: ValidateService,
       private authService: AuthService,
       private flashMessage: FlashMessagesService,
       private router: Router) { }

  ngOnInit() {
        var curuser = this.authService.getUser();
        var userId = curuser.id;
        this.admin = curuser.admin;

        this.calElement = $('#myCalendar');

        //Event click function
        let clickFunc = function (calEvent, jsEvent, view) {
            this.eventClick.emit(calEvent);

            this.calElement.fullCalendar('unselect')

            var tempcolor = calEvent.backgroundColor;
            calEvent.backgroundColor = "#133313";
            this.calElement.fullCalendar( 'updateEvent', calEvent )
            calEvent.backgroundColor = tempcolor;

            if(calEvent.user){
              this.updatename(calEvent);
            } else {
              this.eventUsername = null;
            }

            this.id = calEvent._id,
            this.description = calEvent.description;
            this.url = calEvent.url;
            this.title = calEvent.title;
            this.end = moment(calEvent.end).format('YYYY-MM-DD[T]HH:mm');
            this.start = moment(calEvent.start).format('YYYY-MM-DD[T]HH:mm');


        };

        //Selection change function
        let selectCall = function (start, end, jsEvent, view) {

            this.selectionChanged.emit(start, end, jsEvent, view);
            this.calElement.fullCalendar('rerenderEvents');
            if(view.type == 'month'){
              this.calElement.fullCalendar('changeView', 'agendaWeek');
              this.calElement.fullCalendar('gotoDate',  start);
            } else {
              this.end = moment(end).format('YYYY-MM-DD[T]HH:mm');
              this.start = moment(start).format('YYYY-MM-DD[T]HH:mm');
            }
            this.id = null;
            this.description = null;
            this.color = null;
            this.title = null;
        };


        //limit events
        let allowFunc =  function(selectionInfo) {
          var user =  null;
          var startt = null;
          var endd = null;
          var admin = true;
          var overlapsend = 0;
          var overlapsbegin = 0;
          var start = moment(selectionInfo.start).format('YYYY-MM-DD[T]HH:mm');
          var end = moment(selectionInfo.end).format('YYYY-MM-DD[T]HH:mm');

          this.authService.getEvents(startt, endd, user, admin).subscribe(events => {

            events.forEach(event => {
              if(moment(end).isBetween(event.start, event.end)){
                overlapsend++;
              }
              if(moment(start).isBetween(event.start, event.end)) {
                overlapsbegin++
              }

              if(overlapsend >= 2 || overlapsbegin >= 2) {
                this.calElement.fullCalendar('rerender')
                return false
              }
            });
            return true
          });

        }


        //binds
        let boundClick = clickFunc.bind(this);
        let boundSelect = selectCall.bind(this);
        let boundAllow = allowFunc.bind(this);

        //options
        let options: any = {
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },

            events: function(start, end, timezone, callback) {

              end = moment(end).format('YYYY-MM-DD[T]HH:mm');
              start = moment(start).format('YYYY-MM-DD[T]HH:mm');

                $.ajax({
                    url: 'http://localhost:8081/events/getevents/'
                    +start+"/"+end+"/"+userId+"/"+curuser.admin,
                    dataType: 'json',
                    success: function(response) {

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
                    start: moment(nowDate),
                    end: nowDate.clone().add(60, 'days')
                };
            },
            selectConstraint: 'businessHours',
            hiddenDays:[0,6],
            locale: 'fi',
            minTime: "07:00:00",
            maxTime: "18:00:00",
            allDaySlot: false,
            height: 560,
            selectable: true,
            defaultView: 'agendaWeek',
            timeFormat: 'H:mm',
            slotLabelFormat: 'H:mm',
            aspectRatio: 1,
            fixedWeekCount : false,
            selectHelper: true,
            unselectAuto: true,
            unselectCancel: ".eventinfo",
            nowIndicator: true,
            eventClick: boundClick,
            select: boundSelect,
            selectAllow: boundAllow,
            eventAllow: boundAllow,
        };
        //options end and create calendar
        this.calElement.fullCalendar(options);
  }

  //Event delete
  onDeleteClick(){
    var Id = this.id;

    if(Id){
      this.authService.delEvent(Id).subscribe(data => {
      if( data.success ){
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:3000});
            this.calElement.fullCalendar('removeEvents', Id);
        } else {
          console.log(data);
            this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout:3000});
        }
      });
    } else {
        this.flashMessage.show('Valitse tapahtuma', {cssClass: 'alert-danger', timeout:3000});
    }
  }

  //changes color according to selection
  onTitleChange(){

    switch(this.title){



      case 'öljynvaihto':{
        this.color = '#3a87ad';
        this.end = moment(this.start).add(1, 'hours').format('YYYY-MM-DD[T]HH:mm')
        break;
      }
      case 'renkaidenvaihto':{
        this.color = '#009933';
        break;
      }
      case 'huolto':{
        this.color = '#cc0000';
        break;
      }
      case 'korjaus':{
        this.color = '#999922';
        break;
      }
      case 'muu':{
      this.color = '#333333';
        break;
      }
  }
}


  //Event adding func
  onEventSubmit(){
   var curuser = this.authService.getUser();
   var user: String;

   const event = {
        _id: this.id,
        title: this.title,
        start: this.start,
        end: this.end,
        backgroundColor: this.color,
        description: this.description,
        user: curuser['id']
      }

      if(this.admin){
        event.user = null;
      }

      if(event.title && event.start){
      this.authService.addEvent(event).subscribe(data => {
        if( data.success ){
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:3000});
            this.calElement.fullCalendar( 'refetchEvents' );
            this.calElement.fullCalendar( 'unselect' );
        } else {

            this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout:3000});
        }
      });
    } else {
       this.flashMessage.show('Anna toimenpide ja ajat', {cssClass: 'alert-danger', timeout:3000});
     }
  }

  //gets name whoever owns event
  updatename(event){
    this.authService.getUserById(event).subscribe(user => {
      this.eventUsername = user.username;
    });
  }

  checkOverlap(start,end){
    return new Promise((resolve, reject) => {

      var user =  null;
      var startt = null;
      var endd = null;
      var admin = true;
      var midoverlapscounter = 0;
      var midoverlapstorestart : any[] = [[]];
      var midoverlapstoreend : any[] = [[]];
      var overlaps = 0
      var overlapsbegin = 0
      var overlapsmid = 0
      var overlapsend = 0;

      start = moment(start).format('YYYY-MM-DD[T]HH:mm');
      end = moment(end).format('YYYY-MM-DD[T]HH:mm');

      this.authService.getEvents(startt, endd, user, admin).subscribe(events => {

        events.forEach(event => {
          if(moment(start).isBetween(event.start, event.end,null,'[]')){
            overlapsbegin++;
          }

          if(moment(end).isBetween(event.start, event.end,null,'[]')){
            overlapsend++;
          }

          //jokaiselle eventille jos joku eventti valinnan sisällä.
          if(moment(event.end).isBetween(start, end,null,'[]') &&
            moment(event.start).isBetween(start, end,null,'[]')){
            console.log("overlaps mid")
            //tallennetaan ajat.
            midoverlapstorestart[midoverlapscounter] = event.start;
            midoverlapstoreend[midoverlapscounter] = event.end;

            //otetaan ajat talteen silmukkaa varten.
            var curstart = midoverlapstorestart[midoverlapscounter];
            var curend = midoverlapstoreend[midoverlapscounter];

            let i = 0;
            if(overlapsmid == 0) overlapsmid = 1;

            //jokaiselle eventille jotka ovat valinnan välissä.
            midoverlapstorestart.forEach(eventti => {

              if(i == midoverlapscounter){
                i++;
              };

              if(moment(curstart).isBetween(eventti,midoverlapstoreend[i],null,'[]')
                || moment(curend).isBetween(eventti,midoverlapstoreend[i],null,'[]')){
                    overlapsmid++;

                    console.log("start: " + curstart + "\nend: " + curend+ "\nstart: "+ eventti + "\nend: "+ midoverlapstoreend[i])
                    i++;

              }
            });
            midoverlapscounter++;
          }
        });
        overlapsend += overlapsmid;
        overlapsbegin += overlapsmid;
      resolve(Math.max(overlapsbegin,overlapsend,overlapsmid));
      });
    });
  }
}
