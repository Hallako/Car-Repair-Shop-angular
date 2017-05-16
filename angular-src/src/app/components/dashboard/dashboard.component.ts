import { Component, OnInit, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CalendarEvent } from 'angular-calendar';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'

import 'fullcalendar';
import { Options } from 'fullcalendar';
import _ from 'lodash';


import * as $ from 'jquery';

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

    @Input('height')
    public height: number;

    @Output('event-click')
    eventClick = new EventEmitter();

    @Output('month-changed')
    monthChanged = new EventEmitter();

    @Output('date-change')
    dateChange = new EventEmitter();

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

  nevent:Object;
  title: String;
  start: Date;
  end: String;
  description: String;
  user: String;
  tooltip: any;

  constructor(private validateService: ValidateService,
       private authService: AuthService,
       private flashMessage: FlashMessagesService,
       private router: Router) { }


  ngOnInit() {
        this.calElement = $('#myCalendar');

        //Events
        let clickFunc = function (calEvent, jsEvent, view) {
            this.eventClick.emit(calEvent);
            this.tooltip = calEvent.title;
            console.log('Event');
        };

        let eventRender = function (event, element) {
            const args = {event: event, view: element};
            this.dateChange.emit(args);
            console.log('date changed');
        };

         let viewRender = function (view, element) {
            this.monthChanged.emit(view.intervalStart.month());
            console.log('view rendered');
        };

        //binds
        let boundRender = eventRender.bind(this);
        let boundClick = clickFunc.bind(this);
        let boundView = viewRender.bind(this);

        //options
        let options: any = {
            header: {
                left: 'prev,next today',
                center: 'title',
                right: 'month,agendaWeek,agendaDay'
            },
            events: [],  
            height: 550,  
            selectable: true,
            defaultView: 'month',
            timeFormat: 'H(:mm)',
            aspectRatio: 1,
            fixedWeekCount : false,
            eventRender: boundRender,
            eventClick: boundClick,
            viewRender: boundView,
        };

        if (this.height > 0) {
            options.height = this.height;
        }

        this.calElement.fullCalendar(options);

        //Populate calendar on load
        this.authService.getEvents().subscribe(event => {
        JSON.stringify(event);
        let newEvents = event;
        options.events = newEvents;
        this.calElement.fullCalendar('renderEvents', newEvents, true);
      });

      
  }

  

  //event add form
  onEventSubmit(){
   var curuser = this.authService.getUser();

   const event = {
        title: this.title,
        start: this.start,
        end: this.end,
        description: this.description,
        user: curuser['id']
      }

      this.authService.addEvent(event).subscribe(data => {
        if(data.success){
            this.flashMessage.show('event added succesfully', {cssClass: 'alert-success', timeout:3000});
            this.router.navigate(['/dashboard']);
        } else {
            this.flashMessage.show('Something went wrong', {cssClass: 'alert-success', timeout:3000});
            this.router.navigate(['/dashboard']);
        }
      });
  }
}