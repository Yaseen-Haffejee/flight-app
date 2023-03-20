import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Observable } from 'rxjs';
import { flightDetails } from '../models/flight-details';
import { FlightSearch } from '../models/flight-search';
@Injectable({
  providedIn: 'root'
})
export class FlightService {

  private url = 'http://localhost:8202/'
  constructor(private client:HttpClient) { }


  getAllFlights() : Observable<flightDetails[]> {
      const flightsUrl = this.url +"flights";
      return this.client.get<flightDetails[]>(flightsUrl);
  }

  createAFlight(details:flightDetails) : Observable<flightDetails> {
    const createUrl = this.url + "flights";

    var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append("Authorization", "Basic " + btoa("admin:is_a_lie"));

    const httpOptions = {
      headers: headers_object
    };
    return this.client.post<flightDetails>(createUrl,details,httpOptions);
  }

  searchFlights(search:FlightSearch): Observable<flightDetails[]> {
    const searchUrl = this.url + "flights/search";
    return this.client.post<flightDetails[]>(searchUrl,search);
  }
}
