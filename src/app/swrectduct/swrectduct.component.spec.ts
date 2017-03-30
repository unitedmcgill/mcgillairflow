/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SwrectductComponent } from './swrectduct.component';

describe('swrectductComponent', () => {
  let component: SwrectductComponent;
  let fixture: ComponentFixture<SwrectductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwrectductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwrectductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
