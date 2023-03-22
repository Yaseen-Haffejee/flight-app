import { Component } from '@angular/core';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { FormControl, Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


  usernameControl: FormControl = new FormControl('', Validators.required);
  firstNameControl: FormControl = new FormControl('', Validators.required);
  lastNameControl: FormControl = new FormControl('', Validators.required);
  emailControl: FormControl = new FormControl('', Validators.required);
  passportControl: FormControl = new FormControl('', Validators.required);
  phoneNumberControl: FormControl = new FormControl('', Validators.required);
  passwordControl: FormControl = new FormControl('', Validators.required);

  registrationFormGroup!: FormGroup;

  constructor(private customerService: CustomerService,private router:Router, private loginService:LoginService, private formBuilder:FormBuilder){
    this.registrationFormGroup = this.formBuilder.group({
      username: this.usernameControl,
      firstName: this.firstNameControl,
      lastName: this.lastNameControl,
      passportNumber: this.passportControl,
      phoneNumber: this.phoneNumberControl,
      email: this.emailControl,
      password: this.passwordControl
    });
  }

  registerUser(){
    let details: Customer = this.registrationFormGroup.value
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
