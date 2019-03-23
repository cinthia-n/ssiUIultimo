import { TestBed } from '@angular/core/testing';

import { SharedValuesService } from './shared-values.service';

describe('SharedValuesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SharedValuesService = TestBed.get(SharedValuesService);
    expect(service).toBeTruthy();
  });
});
