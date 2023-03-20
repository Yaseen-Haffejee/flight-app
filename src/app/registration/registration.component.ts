import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  username!: string;
  firstName!: string;
  lastName!: string;
  passportNumber!: string;
  phoneNumber!: string;
  email!: string;
  password!: string;

  constructor(private customerService: CustomerService,private router:Router, private loginService:LoginService){}

  registerUser(){
    let details: Customer = {
      username: this.username,
      firstName: this.firstName,
      lastName: this.lastName,
      passportNumber: this.passportNumber,
      phoneNumber:this.phoneNumber,
      email:this.email,
      password: this.password
    }
    this.customerService.createCustomer(details).subscribe(
      customer => {
        console.log(customer);
        this.customerService.updateDetails(customer);
        this.loginService.isLoggedIn.next(true);
        this.router.navigate(['/flights']);
      },
      error => console.error(error)
    )
  }
}
