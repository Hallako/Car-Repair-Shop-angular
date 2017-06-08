import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router }            from '@angular/router'

import { AccordionComponent, AccordionGroupComponent } from './accordion/accordion.component'

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})

export class HelpComponent implements OnInit {

  test: string = "title";

  constructor() { }

  ngOnInit() {
  }

}
