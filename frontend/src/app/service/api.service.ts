import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor() { }
  readonly API='http://localhost:3000'
  getAPI(){
    return this.API;
  }
}
