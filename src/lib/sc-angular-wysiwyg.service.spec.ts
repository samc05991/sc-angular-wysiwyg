import { TestBed } from '@angular/core/testing';

import { ScAngularWysiwygService } from './sc-angular-wysiwyg.service';

describe('ScAngularWysiwygService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ScAngularWysiwygService = TestBed.get(ScAngularWysiwygService);
    expect(service).toBeTruthy();
  });
});
