import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FromSystemComponent } from './from-system.component';

describe('FromSystemComponent', () => {
  let component: FromSystemComponent;
  let fixture: ComponentFixture<FromSystemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FromSystemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FromSystemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
