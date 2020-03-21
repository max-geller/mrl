/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { NfpaComponent } from './nfpa.component';

describe('NfpaComponent', () => {
  let component: NfpaComponent;
  let fixture: ComponentFixture<NfpaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NfpaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NfpaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
