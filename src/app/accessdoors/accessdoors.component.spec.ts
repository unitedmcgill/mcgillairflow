/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AccessdoorsComponent } from './accessdoors.component';

describe('exposedComponent', () => {
  let component: AccessdoorsComponent;
  let fixture: ComponentFixture<AccessdoorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccessdoorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccessdoorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
