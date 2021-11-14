import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneesProfesionnellesComponent } from './donnees-profesionnelles.component';

describe('DonneesProfesionnellesComponent', () => {
  let component: DonneesProfesionnellesComponent;
  let fixture: ComponentFixture<DonneesProfesionnellesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonneesProfesionnellesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonneesProfesionnellesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
