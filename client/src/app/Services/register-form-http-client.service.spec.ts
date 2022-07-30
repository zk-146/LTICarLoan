import { TestBed } from '@angular/core/testing';

import { RegisterFormHttpClientService } from './register-form-http-client.service';

describe('RegisterFormHttpClientService', () => {
  let service: RegisterFormHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegisterFormHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
