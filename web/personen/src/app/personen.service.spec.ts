import { TestBed } from '@angular/core/testing';

import { PersonenService } from './personen.service';

describe('PersonenService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PersonenService = TestBed.get(PersonenService);
    expect(service).toBeTruthy();
  });
});
