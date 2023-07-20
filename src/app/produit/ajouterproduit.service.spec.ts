import { TestBed } from '@angular/core/testing';

import { AjouterproduitService } from './ajouterproduit.service';

describe('AjouterproduitService', () => {
  let service: AjouterproduitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AjouterproduitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
