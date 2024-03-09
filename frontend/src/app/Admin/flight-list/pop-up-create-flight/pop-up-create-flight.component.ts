import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from 'src/app/service/api.service';
@Component({
  selector: 'app-pop-up-create-flight',
  templateUrl: './pop-up-create-flight.component.html',
  styleUrls: ['./pop-up-create-flight.component.css']
})
export class PopUpCreateFlightComponent implements OnInit {
  list: any;
  constructor(
    public http: HttpClient,
    private api: APIService
  ) {}
  ngOnInit(): void {
    this.getFlightList();
  }
  getFlightList() {
    this.http.get(this.api.getAPI() + '/addLichBay').subscribe((data) => {
      this.list = data;
    });
  }
}
