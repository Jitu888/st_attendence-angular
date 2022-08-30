import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GetStudentDetailComponent } from './get-student-detail.component';

describe('GetStudentDetailComponent', () => {
  let component: GetStudentDetailComponent;
  let fixture: ComponentFixture<GetStudentDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GetStudentDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GetStudentDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
