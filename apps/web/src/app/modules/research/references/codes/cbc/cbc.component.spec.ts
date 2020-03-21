/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CbcComponent } from './cbc.component';

describe('CbcComponent', () => {
  let component: CbcComponent;
  let fixture: ComponentFixture<CbcComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CbcComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CbcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
