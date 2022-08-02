import { TestBed } from '@angular/core/testing';

import { ApplicationHttpClientService } from './application-http-client.service';

describe('ApplicationHttpClientService', () => {
  let service: ApplicationHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
