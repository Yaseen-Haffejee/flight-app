import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from './customer.service';
import { CreateBooking } from '../models/create-booking';
import { firstValueFrom } from 'rxjs';

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


}
