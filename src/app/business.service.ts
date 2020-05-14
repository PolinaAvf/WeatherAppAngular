import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {

  uri = 'http://localhost:4000/business';

  constructor(private http: HttpClient) { }

  addBusiness(person_name, email, password) {
    const obj = {
      person_name: person_name,
      email: email,
      password: password
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done'));
  }
}