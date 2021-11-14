import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionStageInfoGeneralesComponent } from './mission-stage-info-generales.component';

describe('MissionStageInfoGeneralesComponent', () => {
  let component: MissionStageInfoGeneralesComponent;
  let fixture: ComponentFixture<MissionStageInfoGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionStageInfoGeneralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionStageInfoGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
