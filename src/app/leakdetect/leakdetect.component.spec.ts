/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { LeakdetectComponent } from './leakdetect.component';

describe('exposedComponent', () => {
  let component: LeakdetectComponent;
  let fixture: ComponentFixture<LeakdetectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeakdetectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeakdetectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
