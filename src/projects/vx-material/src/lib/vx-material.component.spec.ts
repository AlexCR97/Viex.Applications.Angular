import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VxMaterialComponent } from './vx-material.component';

describe('VxMaterialComponent', () => {
  let component: VxMaterialComponent;
  let fixture: ComponentFixture<VxMaterialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VxMaterialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VxMaterialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
