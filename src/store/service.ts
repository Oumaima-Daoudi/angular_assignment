import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Coffee } from './coffee.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private apiEndpoint = 'https://random-data-api.com/api/coffee/random_coffee';

  constructor(private http: HttpClient) {}

  getAllCoffees(): Observable<Coffee[]> {
    return this.http.get<Coffee[]>(this.apiEndpoint);
  }
}
