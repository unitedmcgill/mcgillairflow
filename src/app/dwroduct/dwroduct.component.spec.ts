/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DwroductComponent } from './dwroduct.component';

describe('dwroductComponent', () => {
  let component: DwroductComponent;
  let fixture: ComponentFixture<DwroductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DwroductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DwroductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
