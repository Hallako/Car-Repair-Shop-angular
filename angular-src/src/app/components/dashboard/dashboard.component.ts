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

    //declare emitters
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

  title: String;
  start: Date;
  end: Date;
  description: String;
  

  constructor(private validateService: ValidateService,
       private authService: AuthService,
       private flashMessage: FlashMessagesService,
       private router: Router) { }


  ngOnInit() {
        this.calElement = $('#myCalendar');

        //Events
        let clickFunc = function (calEvent, jsEvent, view) {
            this.eventClick.emit(calEvent);
            
            this.description = calEvent.description;
            this.url = calEvent.url;
            this.title = calEvent.title;
            this.end = moment(calEvent.end).format('YYYY-MM-DD[T]HH:mm');
            this.start = moment(calEvent.start).format('YYYY-MM-DD[T]HH:mm'); 
            
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
        
        let selectCall = function (start, end, jsEvent, view) {
            this.selectionChanged.emit(start, end, jsEvent, view);

            if(view.type == 'month'){
              this.end = moment(end).subtract(12, 'hours').format('YYYY-MM-DD[T]HH:mm');
              this.start = moment(start).format('YYYY-MM-DD[T]HH:mm'); 
            } else {
              this.end = moment(end).format('YYYY-MM-DD[T]HH:mm');
              this.start = moment(start).format('YYYY-MM-DD[T]HH:mm'); 
            }
            
            this.description = null;
            this.url = null;
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
<<<<<<< HEAD
<<<<<<< HEAD
            events: [],
            height: 471,
            selectable: true,
            defaultView: 'agendaWeek',
            timeFormat: 'H:(mm)',
=======
            events: [],  
            businessHours: {
              dow: [1, 2, 3, 4, 5],
              start: '7:00', 
              end: '18:00', 
            },
            hiddenDays:[0,6],
            minTime: "07:00:00",
            maxTime: "18:00:00",
            allDaySlot: false,
            height: 550,  
            selectable: true,
            defaultView: 'agendaWeek',
            timeFormat: 'H:mm',
            slotLabelFormat: 'H:mm',
>>>>>>> refs/remotes/Hallako/master
=======
            events: [],  
            height: 550,  
            selectable: true,
            defaultView: 'month',
            timeFormat: 'H(:mm)',
>>>>>>> parent of 6d2659a... udate calendar view
            aspectRatio: 1,
            fixedWeekCount : false,
            eventRender: boundRender,
            eventClick: boundClick,
            viewRender: boundView,
<<<<<<< HEAD
<<<<<<< HEAD
            slotLabelFormat: 'H:mm',
            hiddenDays: [0],
            allDaySlot: false,
            maxTime: '17:00:00',
            minTime: '08:00:00',
        }

=======
            select: boundSelect
        };
>>>>>>> refs/remotes/Hallako/master
=======
        };
>>>>>>> parent of 6d2659a... udate calendar view

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
<<<<<<< HEAD

      
  }

  

=======
  }

>>>>>>> refs/remotes/Hallako/master
  //event add form
  onEventSubmit(){
   var curuser = this.authService.getUser();
   var user: String;

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
            location.reload();
        } else {
            this.flashMessage.show('Something went wrong', {cssClass: 'alert-success', timeout:3000});
        }
      });
  }
}