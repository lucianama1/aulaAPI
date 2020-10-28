import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CatsService {

  constructor(public http:HttpClient) {}

  httpHeaders: any = {
    header: {
      'Content-type': 'application/json',
      'Accept': 'application/json'
    }
  }
  getCatImage(): Observable<any>{
    this.httpHeaders.header['x-api-key']="8e3a38d7-8ee8-4e5f-ae88-21b464b99433";
    return this.http.get('https://api.thecatapi.com/v1/images/search', this.httpHeaders);
  }


}
