import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutherChoiceComponent } from './auther-choice.component';

describe('AutherChoiceComponent', () => {
  let component: AutherChoiceComponent;
  let fixture: ComponentFixture<AutherChoiceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutherChoiceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutherChoiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
