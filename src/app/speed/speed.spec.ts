import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Speed } from './speed';

describe('Speed', () => {
  let component: Speed;
  let fixture: ComponentFixture<Speed>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Speed]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Speed);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
