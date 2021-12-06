import { TestBed } from '@angular/core/testing';

import { DemandeurServiceService } from './demandeur-service.service';

describe('DemandeurServiceService', () => {
  let service: DemandeurServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeurServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
