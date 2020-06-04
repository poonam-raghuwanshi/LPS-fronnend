import { TestBed } from '@angular/core/testing';

import { LoanplanService } from './loanplan.service';

describe('LoanplanService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanplanService = TestBed.get(LoanplanService);
    expect(service).toBeTruthy();
  });
});
