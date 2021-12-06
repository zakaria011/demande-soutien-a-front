import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneeProEnseignantComponent } from './donnee-pro-enseignant.component';

describe('DonneeProEnseignantComponent', () => {
  let component: DonneeProEnseignantComponent;
  let fixture: ComponentFixture<DonneeProEnseignantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonneeProEnseignantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonneeProEnseignantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
