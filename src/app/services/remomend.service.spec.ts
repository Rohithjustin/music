import { TestBed } from '@angular/core/testing';

import { RemomendService } from './remomend.service';

describe('RemomendService', () => {
  let service: RemomendService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RemomendService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
