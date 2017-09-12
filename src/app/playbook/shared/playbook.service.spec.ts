import { TestBed, inject } from '@angular/core/testing';

import { PlaybookService } from './playbook.service';

describe('PlaybookService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlaybookService]
    });
  });

  it('should ...', inject([PlaybookService], (service: PlaybookService) => {
    expect(service).toBeTruthy();
  }));
});
