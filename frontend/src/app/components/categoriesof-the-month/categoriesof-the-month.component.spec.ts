import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriesofTheMonthComponent } from './categoriesof-the-month.component';

describe('CategoriesofTheMonthComponent', () => {
  let component: CategoriesofTheMonthComponent;
  let fixture: ComponentFixture<CategoriesofTheMonthComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategoriesofTheMonthComponent]
    });
    fixture = TestBed.createComponent(CategoriesofTheMonthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
