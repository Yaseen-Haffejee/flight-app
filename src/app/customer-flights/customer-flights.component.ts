import { Component, OnInit } from '@angular/core';
import { BookingService } from '../services/booking.service';
import { BookingSearchResult } from '../models/booking-search';

@Component({
  selector: 'app-customer-flights',
  templateUrl: './customer-flights.component.html',
  styleUrls: ['./customer-flights.component.css']
})
export class CustomerFlightsComponent implements OnInit {

  bookingsArray: BookingSearchResult[] = []
  bookingColumns = ['Booking-Date','Booking-Reference','Flight-Number', 'Origin', 'Destination', 'Departure-Time','Arrival-Time','Price']

  constructor(private bookingService:BookingService){}


  ngOnInit(): void {
    this.getAllBookings();
  }

  async getAllBookings(){
    await this.bookingService.getAllCustomerBookings().then(
      details => this.bookingsArray = details
    )
  }
}
