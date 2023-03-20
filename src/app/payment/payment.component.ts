import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../services/booking.service';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent {

  spin:boolean = true;

  async bookFlight(){
    const flightID: number = parseInt(localStorage.getItem('flightID')!);
    const response  = await this.bookingService.makeBooking(flightID);
    console.log(response);
    this.spinner();
  }


  constructor(private router:Router, private bookingService:BookingService){
    this.bookFlight();
  }

  spinner(){
    setTimeout(
      () => {
        this.spin = false;
        this.router.navigate(['/customerFlights']);
    },
      3000
    )
  }
}
