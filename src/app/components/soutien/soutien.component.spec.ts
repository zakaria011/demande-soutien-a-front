import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoutienComponent } from './soutien.component';

describe('SoutienComponent', () => {
  let component: SoutienComponent;
  let fixture: ComponentFixture<SoutienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoutienComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SoutienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
