import { Injectable } from '@angular/core';
import { BehaviorSubject, firstValueFrom } from 'rxjs';
import { CustomerService } from './customer.service';
import { LogInDetails } from '../models/logIn';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})

export class LoginService{

  isAdmin: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  isLoggedIn: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private customerService:CustomerService, private snackbar:MatSnackBar){

  }

  async verifyAdmin(username: string, password: string):Promise<boolean>{
    let isSuccess:boolean = false;
    if(username === 'admin' && password === 'is_a_lie'){
      this.isAdmin.next(true);
      this.isLoggedIn.next(true);
      return true;
    }
    else{
      const details:LogInDetails = {
        username: username,
        password: password
      }

      try{
        const customer:Customer = await firstValueFrom(this.customerService.logIn(details));
        this.customerService.updateDetails(customer);
        isSuccess = true;
        this.isLoggedIn.next(true);
      }
      catch(error:any){
        this.snackbar.open(error.error,'Close',{
          duration: 3000
        });
        isSuccess = false;
      }
    }
    console.log(`Before return: ${isSuccess}`);
    return isSuccess;
  }

  logOut(){
    this.isLoggedIn.next(false);
    this.isAdmin.next(false);
  }

}
