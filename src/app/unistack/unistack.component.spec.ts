/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnistackComponent } from './unistack.component';

describe('exposedComponent', () => {
  let component: UnistackComponent;
  let fixture: ComponentFixture<UnistackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnistackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnistackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
