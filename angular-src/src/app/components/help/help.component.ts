import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router }            from '@angular/router'

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})

export class HelpComponent implements OnInit {

  @Input() active: boolean = false

  constructor() { }

  ngOnInit() {
  }

  onClick(event) {
    this.active = !this.active
    console.log(this);
}

}
