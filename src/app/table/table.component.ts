import { Component, OnInit } from '@angular/core';
import { flightDetails } from '../models/flight-details';
import { FlightService } from '../services/flight-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { flightSearchTypes } from '../enums/flightSearch';
import { FlightSearch } from '../models/flight-search';
import { animate, style, transition, trigger } from '@angular/animations';
import { Router } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  animations: [
    trigger('fade', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate(1000, style({ opacity: 1 }))
      ]),
      transition(':leave', [
        style({ opacity: 1 }),
        animate(0, style({ opacity: 0 }))
      ])
    ])
  ]
})
export class TableComponent implements OnInit {

  isNone:boolean = true;
  isLocation:boolean = false;
  isDate:boolean = false;
  isTime:boolean = false;
  toggleFlag:boolean = false;

  details!:flightDetails;

  flightsArray: flightDetails[]= [];
  flightColumns = ['Flight-Number', 'Origin', 'Destination', 'Departure-Time','Arrival-Time','Available-Seats','Price']


  origin!:string;
  destination!:string;
  departureDate!:string;
  arrivalDate!:string;
  daysToDeparture!:number;
  constructor(private flightDetailsService:FlightService, private router:Router, private loginService:LoginService){}

  ngOnInit(): void {
      const flightsSubscription = this.flightDetailsService.getAllFlights().subscribe(
        data => this.flightsArray = data,
        error => console.error(error),
        () => console.log("Api call completed")
      );

  }

  goToMakeBooking(row:any){
    this.details = row;

    if(this.loginService.isLoggedIn.value){
      this.router.navigate(['/makeBooking',row.id]);
    }
    else{
      this.router.navigate(['/login']);

    }
  }


  noneSelected(){
    this.isLocation = false;
    this.isDate = false;
    this.isTime = false;
    this.isNone = true;
    this.ngOnInit();
  }

  locationSelected(){
    this.isLocation = true;
    this.isDate = false;
    this.isTime = false;
    this.isNone = false;
  }

  dateSelected(){
    this.isLocation = false;
    this.isDate = true;
    this.isTime = false;
    this.isNone = false;
  }

  timeSelected(){
    this.isLocation = false;
    this.isDate = false;
    this.isTime = true;
    this.isNone = false;
  }

  search(){
    let search: string;
    let details:FlightSearch|null;
    if(this.isDate){
      search = flightSearchTypes.DAYS_TO_DEPARTURE_SEARCH;

    }
    else if(this.isTime){
      search = flightSearchTypes.DEPARTURE_TIME_SEARCH;
    }
    else{
      search = flightSearchTypes.ORIGIN_DESTINATION_SEARCH
    }
    details = {
      searchType:search,
      daysToDeparture: this.daysToDeparture,
      departureDateFrom: this.departureDate,
      departureDateTo: this.arrivalDate,
      origin: this.origin,
      destination: this.destination
    }

    this.flightDetailsService.searchFlights(details).subscribe(
      flight => this.flightsArray = flight,
      error => console.error(error),
    )
  }

}
