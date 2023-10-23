import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private url = 'https://random-data-api.com/api/coffee/random_coffee';

  constructor(private httpClient: HttpClient) { }
  getCoffees(){
    return this.httpClient.get(this.url);
  }
}
