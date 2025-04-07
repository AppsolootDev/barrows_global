import { TestBed } from '@angular/core/testing';
 import { getImageService } from './get-images.service';

describe('GetImagesService', () => {
  let service: getImageService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(getImageService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
