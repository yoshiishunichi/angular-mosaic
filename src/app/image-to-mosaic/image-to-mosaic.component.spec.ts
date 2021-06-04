import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImageToMosaicComponent } from './image-to-mosaic.component';

describe('ImageToMosaicComponent', () => {
  let component: ImageToMosaicComponent;
  let fixture: ComponentFixture<ImageToMosaicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImageToMosaicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImageToMosaicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
