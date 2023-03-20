import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerFlightsComponent } from './customer-flights.component';

describe('CustomerFlightsComponent', () => {
  let component: CustomerFlightsComponent;
  let fixture: ComponentFixture<CustomerFlightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerFlightsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomerFlightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
