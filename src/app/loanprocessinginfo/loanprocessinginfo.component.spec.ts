import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanprocessinginfoComponent } from './loanprocessinginfo.component';

describe('LoanprocessinginfoComponent', () => {
  let component: LoanprocessinginfoComponent;
  let fixture: ComponentFixture<LoanprocessinginfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanprocessinginfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanprocessinginfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
