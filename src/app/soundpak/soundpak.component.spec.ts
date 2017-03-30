/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SoundpakComponent } from './soundpak.component';

describe('exposedComponent', () => {
  let component: SoundpakComponent;
  let fixture: ComponentFixture<SoundpakComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SoundpakComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SoundpakComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
