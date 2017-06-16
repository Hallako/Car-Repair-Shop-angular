import { Component, OnInit, Input, Output, EventEmitter, ContentChildren, QueryList, AfterContentInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})

export class AccordionComponent {

  @Input() title: string;

  @Input() active: boolean = false;

  @Output() toggleAccordion: EventEmitter<boolean> = new EventEmitter();

  constructor() {}

  onClick(event) {
    this.toggleAccordion.emit(this.active);
    this.active = !this.active
}

}

@Component({
  selector: 'accordion-group',
  template: `<ng-content>`
})


export class AccordionGroupComponent {

  @Input() exclusive: boolean = false;
  @ContentChildren(AccordionComponent) accordions: QueryList<AccordionComponent>;

  private subscriptions = [];
  private _accordions = [];

  constructor() {}

  ngAfterContentInit() {

    this._accordions = this.accordions.toArray();
    this.removeSubscriptions();
    this.addSubscriptions();

    this.accordions.changes.subscribe(changes => {
      this._accordions = changes;
      this.removeSubscriptions();
      this.addSubscriptions();
    })
  }

  addSubscriptions() {
    this._accordions.forEach(a => {
      let subscription = a.toggleAccordion.subscribe(e => {
        this.accordionToggle(a);
      });
      this.subscriptions.push(subscription);
    })
  }

  removeSubscriptions() {
    this.subscriptions.forEach(sub => {
      sub.unsubscribe();
    })
  }

  accordionToggle(accordion) {
    if (this.exclusive && !accordion.active) {
      this.accordions.forEach(a => a.active = false);
    }
  }

  ngOnDestroy() {
    this.removeSubscriptions();
  }
}
