import { flightDetails } from "./flight-details";

export interface BookingSearch{

  customerId?: number,
  reference?:string,
}


export interface BookingSearchResult{

  customerId:number,
  flightId:number,
  reference:string,
  bookingDate: string,
  flightDetails: flightDetails
}
