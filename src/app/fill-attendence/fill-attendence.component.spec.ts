import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FillAttendenceComponent } from './fill-attendence.component';

describe('FillAttendenceComponent', () => {
  let component: FillAttendenceComponent;
  let fixture: ComponentFixture<FillAttendenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FillAttendenceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FillAttendenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
