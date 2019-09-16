import { TestBed, async, inject } from '@angular/core/testing';

import { CheckTutorialGuard } from './check-tutorial.guard';

describe('CheckTutorialGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CheckTutorialGuard]
    });
  });

  it('should ...', inject([CheckTutorialGuard], (guard: CheckTutorialGuard) => {
    expect(guard).toBeTruthy();
  }));
});
