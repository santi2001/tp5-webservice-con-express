import { TestBed } from '@angular/core/testing';

import { Punto4Service } from './punto4.service';

describe('Punto4Service', () => {
  let service: Punto4Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Punto4Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
