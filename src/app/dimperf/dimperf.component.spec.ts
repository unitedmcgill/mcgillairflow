/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DimPerfComponent } from './dimperf.component';

describe('exposedComponent', () => {
  let component: DimPerfComponent;
  let fixture: ComponentFixture<DimPerfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DimPerfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DimPerfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
