import { TestBed } from '@angular/core/testing';

import { UserpersonalHttpClientService } from './userpersonal-http-client.service';

describe('UserpersonalHttpClientService', () => {
  let service: UserpersonalHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserpersonalHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
