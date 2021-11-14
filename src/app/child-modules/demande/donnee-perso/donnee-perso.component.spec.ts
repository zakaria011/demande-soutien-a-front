import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonneePersoComponent } from './donnee-perso.component';

describe('DonneePersoComponent', () => {
  let component: DonneePersoComponent;
  let fixture: ComponentFixture<DonneePersoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonneePersoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonneePersoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
