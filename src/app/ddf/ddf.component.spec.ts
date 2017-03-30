/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DdfComponent } from './ddf.component';

describe('exposedComponent', () => {
  let component: DdfComponent;
  let fixture: ComponentFixture<DdfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DdfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DdfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
