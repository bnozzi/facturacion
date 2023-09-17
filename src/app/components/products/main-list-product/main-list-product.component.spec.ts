import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainListProductComponent } from './main-list-product.component';

describe('MainListProductComponent', () => {
  let component: MainListProductComponent;
  let fixture: ComponentFixture<MainListProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MainListProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainListProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
