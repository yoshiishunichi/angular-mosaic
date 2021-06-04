import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AfterImageComponent } from './after-image.component';

describe('AfterImageComponent', () => {
  let component: AfterImageComponent;
  let fixture: ComponentFixture<AfterImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AfterImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AfterImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
