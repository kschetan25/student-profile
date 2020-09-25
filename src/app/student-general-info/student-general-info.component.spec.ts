import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentGeneralInfoComponent } from './student-general-info.component';

describe('StudentGeneralInfoComponent', () => {
  let component: StudentGeneralInfoComponent;
  let fixture: ComponentFixture<StudentGeneralInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentGeneralInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentGeneralInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
