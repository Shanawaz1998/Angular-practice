import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLLComponent } from './admin-ll.component';

describe('AdminLLComponent', () => {
  let component: AdminLLComponent;
  let fixture: ComponentFixture<AdminLLComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AdminLLComponent]
    });
    fixture = TestBed.createComponent(AdminLLComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
