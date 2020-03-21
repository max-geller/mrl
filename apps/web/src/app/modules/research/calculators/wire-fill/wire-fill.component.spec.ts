/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { WireFillComponent } from './wire-fill.component';

describe('WireFillComponent', () => {
  let component: WireFillComponent;
  let fixture: ComponentFixture<WireFillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WireFillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WireFillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
