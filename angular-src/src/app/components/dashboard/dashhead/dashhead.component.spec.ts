import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashheadComponent } from './dashhead.component';

describe('DashheadComponent', () => {
  let component: DashheadComponent;
  let fixture: ComponentFixture<DashheadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashheadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
