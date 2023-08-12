import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectTitleComponent } from './project-title.component';

describe('ProjectTitleComponent', () => {
  let component: ProjectTitleComponent;
  let fixture: ComponentFixture<ProjectTitleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ProjectTitleComponent]
    });
    fixture = TestBed.createComponent(ProjectTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
