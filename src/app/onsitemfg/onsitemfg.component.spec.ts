/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OnsitemfgComponent } from './onsitemfg.component';

describe('exposedComponent', () => {
  let component: OnsitemfgComponent;
  let fixture: ComponentFixture<OnsitemfgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OnsitemfgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OnsitemfgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
