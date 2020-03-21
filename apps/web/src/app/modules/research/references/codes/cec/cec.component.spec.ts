/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CecComponent } from './cec.component';

describe('CecComponent', () => {
  let component: CecComponent;
  let fixture: ComponentFixture<CecComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CecComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
