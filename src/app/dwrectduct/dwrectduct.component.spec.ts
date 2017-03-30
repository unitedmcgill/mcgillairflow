/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DwrectductComponent } from './dwrectduct.component';

describe('dwrectductComponent', () => {
  let component: DwrectductComponent;
  let fixture: ComponentFixture<DwrectductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwrectductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwrectductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
