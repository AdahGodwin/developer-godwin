import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelObjectComponent } from './model-object.component';

describe('ModelObjectComponent', () => {
  let component: ModelObjectComponent;
  let fixture: ComponentFixture<ModelObjectComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModelObjectComponent]
    });
    fixture = TestBed.createComponent(ModelObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
