import { TestBed } from '@angular/core/testing';

import { LoanprocessService } from './loanprocess.service';

describe('LoanprocessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LoanprocessService = TestBed.get(LoanprocessService);
    expect(service).toBeTruthy();
  });
});
