import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoyDetailsComponent } from './categoy-details.component';

describe('CategoyDetailsComponent', () => {
  let component: CategoyDetailsComponent;
  let fixture: ComponentFixture<CategoyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoyDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
