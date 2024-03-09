import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopUpCreateFlightComponent } from './pop-up-create-flight.component';

describe('PopUpCreateFlightComponent', () => {
  let component: PopUpCreateFlightComponent;
  let fixture: ComponentFixture<PopUpCreateFlightComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopUpCreateFlightComponent]
    });
    fixture = TestBed.createComponent(PopUpCreateFlightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
