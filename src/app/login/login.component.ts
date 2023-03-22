import { Component, Input } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username!:string;
  password!:string;

  usernameFormControl = new FormControl('',Validators.required)
  passwordFormControl = new FormControl('',Validators.required)

  constructor(private loginService:LoginService, private router:Router){}

  verifyUser(){
    const credentialsCheck:Promise<boolean> =  this.loginService.verifyAdmin(this.username,this.password);
    credentialsCheck.then(
    result => {
      if(result){
        this.router.navigate(['/flights']);
      }
    }
    )
  }

  goToRegistration(){
    this.router.navigate(['/registration']);
  }
}
