import { TestBed } from '@angular/core/testing';

import { UserDetailsHttpClientServiceService } from './user-details-http-client-service.service';

describe('UserDetailsHttpClientServiceService', () => {
  let service: UserDetailsHttpClientServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDetailsHttpClientServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
