import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  coffees:any;
  constructor(private service:PostService) {}
  ngOnInit(): void {
    this.service.getCoffees()
        .subscribe(response => {
          this.coffees = response;
        });
  }
}
