/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { VcdampersComponent } from './vcdampers.component';

describe('exposedComponent', () => {
  let component: VcdampersComponent;
  let fixture: ComponentFixture<VcdampersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VcdampersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VcdampersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
