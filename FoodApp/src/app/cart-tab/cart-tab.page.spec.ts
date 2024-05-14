import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartTabPage } from './cart-tab.page';

describe('CartTabPage', () => {
  let component: CartTabPage;
  let fixture: ComponentFixture<CartTabPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTabPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
