import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanplanComponent } from './loanplan.component';

describe('LoanplanComponent', () => {
  let component: LoanplanComponent;
  let fixture: ComponentFixture<LoanplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
