import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModCompComponent } from './mod-comp.component';

describe('ModCompComponent', () => {
  let component: ModCompComponent;
  let fixture: ComponentFixture<ModCompComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModCompComponent]
    });
    fixture = TestBed.createComponent(ModCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
