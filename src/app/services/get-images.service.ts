import { imgData } from './../entity/imgData';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class getImageService {
  private apiUrl = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getData(num: string) {
        const headers = new HttpHeaders().set(
      'Content-Type', 'application/json; charset=UTF-8');
      headers.set(
        "Access-Control-Allow-Origin", "*");
      headers.set(
        "Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");

      return this.http.get<imgData>(`${this.apiUrl}/${num}/info`,{ observe: 'response'})

  }
}
