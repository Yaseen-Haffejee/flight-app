import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { CustomerFlightsComponent } from './customer-flights/customer-flights.component';
import { LoginComponent } from './login/login.component';
import { MakeBookingComponent } from './make-booking/make-booking.component';
import { PaymentComponent } from './payment/payment.component';
import { RegistrationComponent } from './registration/registration.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [
  {path: "",redirectTo:'/flights',pathMatch : "full"},
  {path: "flights",component: TableComponent},
  {path: "CreateFlight",component: CreateFlightComponent},
  {path: "login",component: LoginComponent},
  {path: "registration",component: RegistrationComponent},
  {path: "makeBooking/:id",component: MakeBookingComponent},
  {path: "payment",component: PaymentComponent},
  {path: "customerFlights",component: CustomerFlightsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
