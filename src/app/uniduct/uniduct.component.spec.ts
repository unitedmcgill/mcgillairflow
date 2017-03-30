/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UniductComponent } from './uniduct.component';

describe('exposedComponent', () => {
  let component: UniductComponent;
  let fixture: ComponentFixture<UniductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
