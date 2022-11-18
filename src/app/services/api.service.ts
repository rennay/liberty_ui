import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(public httpClient: HttpClient) {
  }

  postRecord(_body: any): Observable<any> {
    console.log(`postRecord()`);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.httpClient.post(`${environment.serverUrl}/record`, _body);
    // return this.httpClient.post(`${environment.serverUrl}/record`, _body).toPromise();
  } 

  getRecords(_body: any): Observable<any> {
    console.log(`getRecords()`);

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
    };

    return this.httpClient.get(`${environment.serverUrl}/api/records`, _body);
  }

}
