import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { LogInDetails } from '../models/logIn';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  customer!:Customer;
  url = "http://localhost:8201/customers"
  constructor(private  client:HttpClient) {
      try{
        this.customer = JSON.parse(localStorage.getItem('customer')!);
      }
      catch(err){
        console.error(err);
      }

  }

  createCustomer(details:Customer):  Observable<Customer>{
    var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append("Authorization", "Basic " + btoa("admin:is_a_lie"));

    const httpOptions = {
      headers: headers_object
    };
    return this.client.post<Customer>(this.url, details,httpOptions);
  }

  logIn(details:LogInDetails){
    var headers_object = new HttpHeaders();
    headers_object.append('Content-Type', 'application/json');
    headers_object.append("Authorization", "Basic " + btoa("admin:is_a_lie"));

    const httpOptions = {
      headers: headers_object
    };
    const loginUrl = this.url + "/login"
    return this.client.post<Customer>(loginUrl, details,httpOptions);
  }

  updateDetails(details:Customer){
    this.customer = details;
    localStorage.setItem("customer", JSON.stringify(this.customer));
  }

}
