import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LikedProductsComponent } from './liked-products.component';

describe('LikedProductsComponent', () => {
  let component: LikedProductsComponent;
  let fixture: ComponentFixture<LikedProductsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LikedProductsComponent]
    });
    fixture = TestBed.createComponent(LikedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
