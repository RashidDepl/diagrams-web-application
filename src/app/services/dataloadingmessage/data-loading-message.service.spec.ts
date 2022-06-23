import { TestBed } from '@angular/core/testing';

import { DataLoadingMessageService } from './data-loading-message.service';

describe('DataLoadingMessageService', () => {
  let service: DataLoadingMessageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataLoadingMessageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
