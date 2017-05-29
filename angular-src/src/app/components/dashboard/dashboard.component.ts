import { Component, OnInit, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CalendarEvent } from 'angular-calendar';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'
import { Options } from 'fullcalendar';
import * as moment from 'moment';
import 'fullcalendar';
import _ from 'lodash';
import * as $ from 'jquery';
import 'fullcalendar/dist/locale-all.js';

export interface IEvent {
    title: string;
    description: string;
    start: Date;
    end: Date;
    type: string;
    backgroundColor: string;
    textColor: string;
    className: string;
    borderColor: string;
}

declare var jQuery: any;

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

    //Temporary event store
    id: String;
    title: String;
    start: Date;
    end: Date;
    color: String;
    description: String;
    TempEvent:any;

    admin: Boolean = false;

    //declaring emitters
    @Input('height')
    public height: number;

    @Output('event-click')
    eventClick = new EventEmitter();

    @Output('month-changed')
    monthChanged = new EventEmitter();

    @Output('date-change')
    dateChange = new EventEmitter();

    @Output('select-changed')
    selectionChanged = new EventEmitter();

    calElement = null;

    addEvents(events: IEvent[]) {
        this.calElement = $('#myCalendar');
        if (!_.isNil(events)) {
            $('#myCalendar').fullCalendar('addEventSource', events);
        }
    }

    getCurrentMonth() {
        const currentdate = <any>$("#myCalendar").fullCalendar('getDate');
        return currentdate.month();
    }


  constructor(private validateService: ValidateService,
       private authService: AuthService,
       private flashMessage: FlashMessagesService,
       private router: Router) { }


  ngOnInit() {
        var curuser = this.authService.getUser();
        var userId = curuser.id;
        this.admin = curuser.admin; 

        this.calElement = $('#myCalendar');
        
        //Events
        let clickFunc = function (calEvent, jsEvent, view) {
            this.eventClick.emit(calEvent);

            this.calElement.fullCalendar('unselect')

            calEvent.backgroundColor = "#235323";
            this.calElement.fullCalendar( 'updateEvent', calEvent )
            calEvent.backgroundColor = "#3a87ad";

            this.id = calEvent._id,
            this.description = calEvent.description;
            this.url = calEvent.url;
            this.title = calEvent.title;
            this.end = moment(calEvent.end).format('YYYY-MM-DD[T]HH:mm');
            this.start = moment(calEvent.start).format('YYYY-MM-DD[T]HH:mm');
        };

        let eventRender = function (event, element) {
            const args = {event: event, view: element};
            this.dateChange.emit(args);
        };

         let viewRender = function (view, element) {
            this.monthChanged.emit(view.intervalStart.month());
        };

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

        //binds
        let boundRender = eventRender.bind(this);
        let boundClick = clickFunc.bind(this);
        let boundView = viewRender.bind(this);
        let boundSelect = selectCall.bind(this);

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
                        console.log(response);
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
                    start: moment(nowDate).subtract(1,'days'),
                    end: nowDate.clone().add(60, 'days')
                };
            },
            hiddenDays:[0,6],
            locale: 'fi',
            minTime: "07:00:00",
            maxTime: "18:00:00",
            allDaySlot: false,
            height: 560,
            selectable: true,
            defaultView: 'agendaWeek',
            timeFormat: 'H:mm',
            longPressDelay: 275,
            slotLabelFormat: 'H:mm',
            aspectRatio: 1,
            fixedWeekCount : false,
            selectHelper: true,
            unselectAuto: true,
            unselectCancel: ".eventinfo",
            eventRender: boundRender,
            eventClick: boundClick,
            viewRender: boundView,
            select: boundSelect,
        };
        //options end
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
            this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout:3000});
        }
      });
    } else {
        this.flashMessage.show('Select an event', {cssClass: 'alert-danger', timeout:3000});
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

      if(event.title && event.start && event.user){
      this.authService.addEvent(event).subscribe(data => {
        if( data.success ){
            this.flashMessage.show(data.msg, {cssClass: 'alert-success', timeout:3000});
            this.calElement.fullCalendar( 'refetchEvents' );
            this.calElement.fullcalendar( 'unselect' );
        } else {

            this.flashMessage.show(data.msg, {cssClass: 'alert-danger', timeout:3000});
        }
      });
    } else {
       this.flashMessage.show('Anna toimenpide ja ajat', {cssClass: 'alert-danger', timeout:3000});
     }
  }

}
