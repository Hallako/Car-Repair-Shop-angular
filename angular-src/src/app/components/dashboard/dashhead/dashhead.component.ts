import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mwl-dashhead',
  templateUrl: './dashhead.component.html',
  styleUrls: ['./dashhead.component.css']
})
export class DashheadComponent {

  @Input() view: string;

  @Input() viewDate: Date;

  @Input() locale: string = 'en';

  @Output() viewChange: EventEmitter<string> = new EventEmitter();

  @Output() viewDateChange: EventEmitter<Date> = new EventEmitter();

}