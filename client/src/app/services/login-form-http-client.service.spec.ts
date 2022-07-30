import { TestBed } from '@angular/core/testing';

import { LoginFormHttpClientService } from './login-form-http-client.service';

describe('LoginFormHttpClientService', () => {
  let service: LoginFormHttpClientService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoginFormHttpClientService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
