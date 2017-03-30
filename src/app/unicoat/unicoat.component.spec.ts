/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnicoatComponent } from './unicoat.component';

describe('exposedComponent', () => {
  let component: UnicoatComponent;
  let fixture: ComponentFixture<UnicoatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnicoatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnicoatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
