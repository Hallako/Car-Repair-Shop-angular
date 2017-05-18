import { Component, OnInit, ViewContainerRef, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CalendarEvent } from 'angular-calendar';
import { ValidateService } from '../../services/validate.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { Router } from '@angular/router'
import { Options } from 'fullcalendar';
import * as moment from 'moment';
import 'fullcalendar';
import 'fullcalendar/dist/locale-all'
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
  color: string;
  nowDate: Date;
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
    let clickFunc = function(calEvent, jsEvent, view) {
      this.eventClick.emit(calEvent);
      this.description = calEvent.description;
      this.url = calEvent.url;
      this.title = calEvent.title;
      this.start = moment(calEvent.start).format('YYYY-MM-DD[T]HH:mm');
      this.end = moment(calEvent.end).format('YYYY-MM-DD[T]HH:mm');
      calEvent.backgroundColor = '#378060'
      this.calElement.fullCalendar('updateEvent', calEvent)
      calEvent.backgroundColor = '#3a87ad'
    };



    let eventRender = function(event, element) {
      const args = { event: event, view: element };
      this.dateChange.emit(args);
      console.log('date changed');
    };

    let viewRender = function(view, element) {
      this.monthChanged.emit(view.intervalStart.month());
      console.log('view rendered');
    };

    let selectCall = function(start, end, jsEvent, view) {
      this.selectionChanged.emit(start, end, jsEvent, view);


      if (view.type == 'month') {

        this.calElement.fullCalendar('changeView', 'agendaWeek', start)
        /*this.end = moment(end).subtract(12, 'hours').format('YYYY-MM-DD[T]HH:mm');
        this.start = moment(start).format('YYYY-MM-DD[T]HH:mm');*/
    }
      else {
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
        left: 'prev,next,today',
        center: 'title',
        right: 'month,agendaWeek,agendaDay'
      },

      views: {
        agendaWeek: {
          titleFormat: 'D.M.YYYY'
        }
      },

      locale: 'fi',
      events: [],
      height: 471,
      selectable: true,
      selectHelper: true,
      unselectAuto: false,
      defaultView: 'agendaWeek',
      timeFormat: 'H:mm',
      columnFormat: 'DD.MM',
      hiddenDays: [0],
      minTime: "07:00:00",
      maxTime: "16:00:00",
      allDaySlot: false,
      slotEventOverlap: true,
      slotLabelFormat: 'H:mm',
      aspectRatio: 1,
      fixedWeekCount: false,
      eventRender: boundRender,
      eventClick: boundClick,
      viewRender: boundView,
      select: boundSelect,
      firstHour: 7,
      validRange: function(nowDate) {
        return {
          start: moment(nowDate).subtract(20, 'hours'),
          end: moment(nowDate).add(1, 'months')
        }
      },
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
  onEventSubmit() {
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
      if (data.success) {
        this.flashMessage.show('Event added succesfully', { cssClass: 'alert-success', timeout: 3000 });
        location.reload();
      } else {
        this.flashMessage.show('Something went wrong', { cssClass: 'alert-danger', timeout: 3000 });
      }
    });
  }
}
