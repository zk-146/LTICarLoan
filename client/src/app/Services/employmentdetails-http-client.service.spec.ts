import { TestBed } from '@angular/core/testing';

import { EmploymentdetailsHttpClientService } from './employmentdetails-http-client.service';

describe('EmploymentdetailsHttpClientService', () => {
  let service: EmploymentdetailsHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmploymentdetailsHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
