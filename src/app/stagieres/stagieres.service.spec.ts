import { TestBed } from '@angular/core/testing';

import { StagieresService } from './stagieres.service';

describe('StagieresService', () => {
  let service: StagieresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StagieresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
