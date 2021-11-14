import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostulemoduleComponent } from './postulemodule.component';

describe('PostulemoduleComponent', () => {
  let component: PostulemoduleComponent;
  let fixture: ComponentFixture<PostulemoduleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostulemoduleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostulemoduleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
