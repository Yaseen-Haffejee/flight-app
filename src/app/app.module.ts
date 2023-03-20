import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { ToolBarComponent } from './tool-bar/tool-bar.component'
import { CreateFlightComponent } from './create-flight/create-flight.component';
import { DialogComponent } from './dialog/dialog.component';
import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
import { LoginComponent } from './login/login.component'
import { RegistrationComponent } from './registration/registration.component';
import { MakeBookingComponent } from './make-booking/make-booking.component';
import { PaymentComponent } from './payment/payment.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatButtonModule} from '@angular/material/button';
import {RouterModule } from '@angular/router';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatStepperModule} from '@angular/material/stepper';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { CustomerFlightsComponent } from './customer-flights/customer-flights.component';
@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    ToolBarComponent,
    CreateFlightComponent,
    DialogComponent,
    ConfirmationDialogComponent,
    LoginComponent,
    RegistrationComponent,
    MakeBookingComponent,
    PaymentComponent,
    CustomerFlightsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,


    MatTableModule,
    HttpClientModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatDialogModule,
    MatChipsModule,
    MatSnackBarModule,
    MatStepperModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,

    RouterModule.forRoot([
      {path: "flights",component: TableComponent},
      {path: "CreateFlight",component: CreateFlightComponent},
      {path: "login",component: LoginComponent},
      {path: "registration",component: RegistrationComponent},
      {path: "makeBooking/:id",component: MakeBookingComponent},
      {path: "payment",component: PaymentComponent},
      {path: "customerFlights",component: CustomerFlightsComponent},
    ])

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
