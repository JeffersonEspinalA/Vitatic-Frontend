import { TestBed } from '@angular/core/testing';

import { ListactivitiesService } from './listactivities.service';

describe('ListactivitiesService', () => {
  let service: ListactivitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListactivitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
