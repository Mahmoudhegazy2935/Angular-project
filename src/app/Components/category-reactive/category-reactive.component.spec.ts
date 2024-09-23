import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryReactiveComponent } from './category-reactive.component';

describe('CategoryReactiveComponent', () => {
  let component: CategoryReactiveComponent;
  let fixture: ComponentFixture<CategoryReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoryReactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoryReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
