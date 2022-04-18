import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaPicComponent } from './pizza-pic.component';

describe('PizzaPicComponent', () => {
  let component: PizzaPicComponent;
  let fixture: ComponentFixture<PizzaPicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaPicComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaPicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
