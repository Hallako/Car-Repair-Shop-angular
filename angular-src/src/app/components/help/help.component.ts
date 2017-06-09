import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router }                                         from '@angular/router';

import { AccordionComponent, AccordionGroupComponent }    from './accordion/accordion.component';
import { Help }                                           from './help';

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})

export class HelpComponent implements OnInit {

  tests: Help[]

  constructor() {

    var header: string

    header = "terve";
    const test2 = [] = [{
      header: header,
      content: "terve"
    }, {
      header: "pää",
      content: "pöö"
    }]
    this.tests = test2;

    console.log(this.tests)
  }

  ngOnInit() {
  }

}
