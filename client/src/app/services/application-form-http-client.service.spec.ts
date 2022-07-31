import { TestBed } from '@angular/core/testing';

import { ApplicationFormHttpClientService } from './application-form-http-client.service';

describe('ApplicationFormHttpClientService', () => {
  let service: ApplicationFormHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApplicationFormHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
