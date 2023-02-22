import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Project1DetailComponent } from './project1-detail.component';

describe('Project1DetailComponent', () => {
  let component: Project1DetailComponent;
  let fixture: ComponentFixture<Project1DetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Project1DetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Project1DetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
