import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoosePostuleComponent } from './choose-postule.component';

describe('ChoosePostuleComponent', () => {
  let component: ChoosePostuleComponent;
  let fixture: ComponentFixture<ChoosePostuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChoosePostuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoosePostuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
