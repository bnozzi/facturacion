import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProductMaterialComponent } from './list-product-material.component';

describe('ListProductMaterialComponent', () => {
  let component: ListProductMaterialComponent;
  let fixture: ComponentFixture<ListProductMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProductMaterialComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListProductMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
