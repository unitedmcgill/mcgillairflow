/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FactairComponent } from './factair.component';

describe('exposedComponent', () => {
  let component: FactairComponent;
  let fixture: ComponentFixture<FactairComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactairComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactairComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
