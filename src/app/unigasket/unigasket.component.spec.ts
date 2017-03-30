/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnigasketComponent } from './unigasket.component';

describe('exposedComponent', () => {
  let component: UnigasketComponent;
  let fixture: ComponentFixture<UnigasketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnigasketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnigasketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
