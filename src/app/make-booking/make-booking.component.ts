import { Component } from '@angular/core';
import { Validators, FormBuilder, FormControl } from '@angular/forms';
import { flightDetails } from '../models/flight-details';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { FlightService } from '../services/flight-service.service';
import { CustomerService } from '../services/customer.service';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-make-booking',
  templateUrl: './make-booking.component.html',
  styleUrls: ['./make-booking.component.css']
})
export class MakeBookingComponent {

  nameControl : FormControl = new FormControl('',Validators.required)
  cardNumberControl : FormControl = new FormControl('',Validators.required)
  dateControl : FormControl = new FormControl('',Validators.required)
  cvvControl : FormControl = new FormControl('',Validators.required)


  paymentFormGroup = this._formBuilder.group({
    name: this.nameControl,
    cardNumber: this.cardNumberControl,
    date: this.dateControl,
    cvv: this.cvvControl
  });

  firstFormGroup = this._formBuilder.group({
    firstCrl: new FormControl('',Validators.required)
  });
  secondFormGroup = this._formBuilder.group({
    firstCrl: new FormControl('',Validators.required)
  });
  isLinear = false;

  flightId:string|null;

  details:flightDetails|null = null;
  customerDetails: Customer|null = null
  constructor(private _formBuilder: FormBuilder, private route: ActivatedRoute,private flightService: FlightService, private customerService:CustomerService, private router:Router) {
    this.flightId =  this.route.snapshot.paramMap.get("id")
    this.getDetails();
    this.customerDetails = this.customerService.customer;
  }

  async getDetails(){
    await this.flightService.getFlightById(this.flightId).then(
      flight => this.details = flight,
      error => console.error(error)
    );
  }

  makePayment(){
    this.isLinear = true;
    localStorage.setItem("flightID", this.flightId!);
    this.router.navigate(['/payment'])
  }


}
