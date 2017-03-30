/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SwroductComponent } from './swroduct.component';

describe('swroductComponent', () => {
  let component: SwroductComponent;
  let fixture: ComponentFixture<SwroductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwroductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwroductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
