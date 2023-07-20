import { TestBed } from '@angular/core/testing';

import { ModifierproduitService } from './modifierproduit.service';

describe('ModifierproduitService', () => {
  let service: ModifierproduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModifierproduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
