import { TestBed } from '@angular/core/testing';

import { TuxinAcAnimatedImagesService } from './tuxin-ac-animated-images.service';

describe('TuxinAcAnimatedImagesService', () => {
  let service: TuxinAcAnimatedImagesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TuxinAcAnimatedImagesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
