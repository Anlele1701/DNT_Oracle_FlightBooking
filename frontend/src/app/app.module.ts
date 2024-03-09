import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './Admin/layout/layout.component';
import { FlightListComponent } from './Admin/flight-list/flight-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PopUpCreateFlightComponent } from './Admin/flight-list/pop-up-create-flight/pop-up-create-flight.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FlightListComponent,
    PopUpCreateFlightComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule, 
    MatDialogModule
    

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
