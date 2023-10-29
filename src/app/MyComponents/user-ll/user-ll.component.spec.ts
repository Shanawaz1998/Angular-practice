import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserLLComponent } from './user-ll.component';

describe('UserLLComponent', () => {
  let component: UserLLComponent;
  let fixture: ComponentFixture<UserLLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserLLComponent]
    });
    fixture = TestBed.createComponent(UserLLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
