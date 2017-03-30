/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UniquickComponent } from './uniquick.component';

describe('exposedComponent', () => {
  let component: UniquickComponent;
  let fixture: ComponentFixture<UniquickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniquickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniquickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
