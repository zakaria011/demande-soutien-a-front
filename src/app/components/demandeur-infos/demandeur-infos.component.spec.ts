import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeurInfosComponent } from './demandeur-infos.component';

describe('DemandeurInfosComponent', () => {
  let component: DemandeurInfosComponent;
  let fixture: ComponentFixture<DemandeurInfosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DemandeurInfosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandeurInfosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
