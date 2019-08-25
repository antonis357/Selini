/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CalculateMoonPhaseService } from './calculate-moon-phase.service';

describe('Service: CalculateMoonPhase', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculateMoonPhaseService]
    });
  });

  it('should ...', inject([CalculateMoonPhaseService], (service: CalculateMoonPhaseService) => {
    expect(service).toBeTruthy();
  }));
});
