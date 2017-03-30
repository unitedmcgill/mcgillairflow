/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnihousingComponent } from './unihousing.component';

describe('exposedComponent', () => {
  let component: UnihousingComponent;
  let fixture: ComponentFixture<UnihousingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnihousingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnihousingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
