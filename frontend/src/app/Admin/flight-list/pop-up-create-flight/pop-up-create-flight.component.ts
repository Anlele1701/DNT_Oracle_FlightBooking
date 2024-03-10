import { Component, Inject, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { APIService } from 'src/app/service/api.service';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-pop-up-create-flight',
  templateUrl: './pop-up-create-flight.component.html',
  styleUrls: ['./pop-up-create-flight.component.css']
})
export class PopUpCreateFlightComponent implements OnInit {
  list: any = {};
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public http: HttpClient,
    private api: APIService,
  ) {}
  ngOnInit(): void {
 }
  createFlightList(){
    console.log(this.list);
    this.http.post(this.api.getAPI() + '/addLichBay', this.list).subscribe((data:any) => {
    });
  }
}
