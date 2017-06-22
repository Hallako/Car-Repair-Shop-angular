import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router }                                         from '@angular/router';
import { AccordionComponent, AccordionGroupComponent }    from './accordion/accordion.component';
import { Help, HelpCategory }                             from '../../variables/help';
import { Observable }                                     from 'rxjs'
import { Http } from '@angular/http';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})

export class HelpComponent implements OnInit {

  tests: HelpCategory[]

  constructor(private http: Http) {}

  ngOnInit() {
    this.http.get('assets/help.json').subscribe(res => {
      this.tests = res.json();
    }
  )
  }

}
