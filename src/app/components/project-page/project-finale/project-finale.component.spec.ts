import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectFinaleComponent } from './project-finale.component';

describe('ProjectFinaleComponent', () => {
  let component: ProjectFinaleComponent;
  let fixture: ComponentFixture<ProjectFinaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectFinaleComponent]
    });
    fixture = TestBed.createComponent(ProjectFinaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
