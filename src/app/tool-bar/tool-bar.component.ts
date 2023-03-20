import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-tool-bar',
  templateUrl: './tool-bar.component.html',
  styleUrls: ['./tool-bar.component.css']
})
export class ToolBarComponent {

  isAdmin:boolean = false;
  isLoggedIn: boolean = false;
  constructor(private loginService:LoginService){
    loginService.isAdmin.subscribe(login => this.isAdmin = login)
    loginService.isLoggedIn.subscribe(login => this.isLoggedIn = login)
  }

  logout(){
    this.loginService.logOut();
  }


}
