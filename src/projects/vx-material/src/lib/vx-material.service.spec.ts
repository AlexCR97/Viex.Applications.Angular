import { TestBed } from '@angular/core/testing';

import { VxMaterialService } from './vx-material.service';

describe('VxMaterialService', () => {
  let service: VxMaterialService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VxMaterialService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
