import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewHoursProjectComponent } from './overview-hours-project.component';

describe('OverviewHoursProjectComponent', () => {
  let component: OverviewHoursProjectComponent;
  let fixture: ComponentFixture<OverviewHoursProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverviewHoursProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewHoursProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
