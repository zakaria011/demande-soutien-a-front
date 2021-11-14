import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MsInfoGeneralesComponent } from './ms-info-generales.component';

describe('MsInfoGeneralesComponent', () => {
  let component: MsInfoGeneralesComponent;
  let fixture: ComponentFixture<MsInfoGeneralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MsInfoGeneralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MsInfoGeneralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
