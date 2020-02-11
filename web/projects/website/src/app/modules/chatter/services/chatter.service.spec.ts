import { TestBed } from '@angular/core/testing';

import { ChatterService } from './chatter.service';

describe('ChatterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ChatterService = TestBed.get(ChatterService);
    expect(service).toBeTruthy();
  });
});
