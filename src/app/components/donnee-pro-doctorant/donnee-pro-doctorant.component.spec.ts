import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneeProDoctorantComponent } from './donnee-pro-doctorant.component';

describe('DonneeProDoctorantComponent', () => {
  let component: DonneeProDoctorantComponent;
  let fixture: ComponentFixture<DonneeProDoctorantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonneeProDoctorantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonneeProDoctorantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
