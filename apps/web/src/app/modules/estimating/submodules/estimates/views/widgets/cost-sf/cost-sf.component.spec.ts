/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CostSfComponent } from './cost-sf.component';

describe('CostSfComponent', () => {
  let component: CostSfComponent;
  let fixture: ComponentFixture<CostSfComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CostSfComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CostSfComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
