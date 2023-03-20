import { Component } from '@angular/core';
import { FlightService } from '../services/flight-service.service';
import { flightDetails } from '../models/flight-details';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';

@Component({
  selector: 'app-create-flight',
  templateUrl: './create-flight.component.html',
  styleUrls: ['./create-flight.component.css']
})
export class CreateFlightComponent {

  flightNumber!: string;
  origin!: string;
  destination!: string;
  departureDate!: string;
  arrivalDate!: string;
  availableSeats!: number;
  price!:number;

  constructor(private flightService:FlightService, public dialog: MatDialog){}

  getDetails(){

    let details: flightDetails = {
      flightNumber: this.flightNumber,
      origin: this.origin,
      destination: this.destination,
      departureTime:this.departureDate,
      arrivalTime:this.arrivalDate,
      seatsAvailable:this.availableSeats,
      seatCost:this.price
    }
    details.flightNumber = this.flightNumber;

    this.flightService.createAFlight(details).subscribe(
      () => this.openDialog('750ms','750ms'),
      error => console.error(error),
      () => console.log(`The flight has been created successfully`)
    );
  }


  openDialog(enterAnimationDuration: string, exitAnimationDuration: string): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
    });
    dialogRef.afterClosed().subscribe(
      () => {
        this.flightNumber = "";
        this.origin = "";
        this.destination ="";
        this.departureDate = "";
        this.arrivalDate = "";
        this.availableSeats = 0;
        this.price = 0;
      }
    )
  }
}
