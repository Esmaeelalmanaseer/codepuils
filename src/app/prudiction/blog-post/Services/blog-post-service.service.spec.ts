import { TestBed } from '@angular/core/testing';

import { BlogPostServiceService } from './blog-post-service.service';

describe('BlogPostServiceService', () => {
  let service: BlogPostServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogPostServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
