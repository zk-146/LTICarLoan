import { TestBed } from '@angular/core/testing';

import { LoanOfferHttpClientService } from './loan-offer-http-client.service';

describe('LoanOfferHttpClientService', () => {
  let service: LoanOfferHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoanOfferHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
