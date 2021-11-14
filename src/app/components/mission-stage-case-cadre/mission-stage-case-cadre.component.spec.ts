import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MissionStageCaseCadreComponent } from './mission-stage-case-cadre.component';

describe('MissionStageCaseCadreComponent', () => {
  let component: MissionStageCaseCadreComponent;
  let fixture: ComponentFixture<MissionStageCaseCadreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MissionStageCaseCadreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MissionStageCaseCadreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
