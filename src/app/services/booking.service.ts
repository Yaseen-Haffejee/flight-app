import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from './customer.service';
import { CreateBooking } from '../models/create-booking';
import { firstValueFrom } from 'rxjs';
import { BookingSearch, BookingSearchResult } from '../models/booking-search';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  url  = 'http://localhost:8203/bookings';
  constructor(private client:HttpClient, private customerService:CustomerService) { }

  async makeBooking(flightID:number){

    const details: CreateBooking = {
      customerId:this.customerService.customer.id!,
      flightId:flightID
    }

    const response  = await firstValueFrom(this.client.post<CreateBooking>(this.url, details));

    return response;
  }


  async getAllCustomerBookings(){

    const details: BookingSearch = {
      customerId: this.customerService.customer.id
    }

    const searchUrl = this.url +"/search"
    const response = await firstValueFrom(this.client.post<BookingSearchResult[]>(searchUrl, details));

    return response;
  }

}
