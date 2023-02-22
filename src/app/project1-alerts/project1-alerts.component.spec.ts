import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project1AlertsComponent } from './project1-alerts.component';

describe('Project1AlertsComponent', () => {
  let component: Project1AlertsComponent;
  let fixture: ComponentFixture<Project1AlertsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project1AlertsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project1AlertsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
