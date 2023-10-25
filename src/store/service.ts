import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, forkJoin } from 'rxjs';
import { Coffee } from './coffee.model';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {
  private apiEndpoint = 'https://random-data-api.com/api/coffee/random_coffee';

  constructor(private http: HttpClient) {}

  getAllCoffees(count: number,page: number, pageSize: number): Observable<Coffee[]> {
    const params = {
      page: page.toString(),
      pageSize: pageSize.toString()
    };
    const requests: Observable<Coffee>[] = [];
    for (let i = 0; i < count; i++) {
      requests.push(this.http.get<Coffee>(this.apiEndpoint, { params }));
    }
    return forkJoin(requests);
  }

}
