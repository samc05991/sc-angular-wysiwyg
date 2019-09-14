import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScAngularWysiwygComponent } from './sc-angular-wysiwyg.component';

describe('ScAngularWysiwygComponent', () => {
  let component: ScAngularWysiwygComponent;
  let fixture: ComponentFixture<ScAngularWysiwygComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScAngularWysiwygComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScAngularWysiwygComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
