/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { ExposedComponent } from './exposed.component';

describe('exposedComponent', () => {
  let component: ExposedComponent;
  let fixture: ComponentFixture<ExposedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExposedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExposedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
