import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TuxinAcAnimatedImagesComponent } from './tuxin-ac-animated-images.component';

describe('TuxinAcAnimatedImagesComponent', () => {
  let component: TuxinAcAnimatedImagesComponent;
  let fixture: ComponentFixture<TuxinAcAnimatedImagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TuxinAcAnimatedImagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TuxinAcAnimatedImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
