import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from 'src/app/service/api.service';
import { MatDialog } from '@angular/material/dialog';
import { PopUpCreateFlightComponent } from './pop-up-create-flight/pop-up-create-flight.component';

@Component({
  selector: 'app-flight-list',
  templateUrl: './flight-list.component.html',
  styleUrls: ['../shared/AdminIndex.css'],
})
export class FlightListComponent implements OnInit {
  constructor(
    public http: HttpClient,
    private api: APIService,
    private popUp: MatDialog
  ) {}
  list: any;
  ngOnInit(): void {
    this.getFlightList();
  }
  getFlightList() {
    this.http.get(this.api.getAPI() + '/showLichBay').subscribe((data) => {
      this.list = data;   
    });
  }
  popUpCreateFlight(
    enterAnimationDuration: string,
    exitAnimationDuration: string
  ): void {
    const popup = this.popUp.open(PopUpCreateFlightComponent, {
      enterAnimationDuration,
      exitAnimationDuration,
    });
    popup.afterClosed().subscribe((result) => {
      this.getFlightList();
    });
  }
}
