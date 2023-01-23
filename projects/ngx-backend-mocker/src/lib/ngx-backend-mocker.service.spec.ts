import { TestBed } from '@angular/core/testing';

import { NgxBackendMockerService } from './ngx-backend-mocker.service';

describe('NgxBackendMockerService', () => {
  let service: NgxBackendMockerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxBackendMockerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
