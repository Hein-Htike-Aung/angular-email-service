import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToSystemComponent } from './to-system.component';

describe('ToSystemComponent', () => {
  let component: ToSystemComponent;
  let fixture: ComponentFixture<ToSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
