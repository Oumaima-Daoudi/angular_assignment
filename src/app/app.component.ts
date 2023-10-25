import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { MatPaginator, PageEvent } from '@angular/material/paginator';

import { Observable } from 'rxjs';
import { Coffee } from 'src/store/coffee.model';
import * as CoffeeActions from '../store/actions';
import { Store } from '@ngrx/store';
import { CoffeeService } from 'src/store/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  randomData: Coffee[] = [];
  currentPage = 1;
  itemsPerPage = 10;
  totalPages: number=50;
 /*  coffees$: Observable<Coffee[]>;
  isLoading$: Observable<boolean>;
 */
  constructor( private coffeeService : CoffeeService) {
    /* this.coffees$ = this.store.select(selectAllCoffees);
    this.isLoading$ = this.store.select((state) => state.coffee.loading); */
  }
  ngOnInit(): void {
   /*  this.loadCoffees();
    console.log(this.loadCoffees());
    console.log(this.coffees$); */
    this.fetchRandomData(50,this.currentPage, this.itemsPerPage);
    console.log(this.randomData);
  }
  fetchRandomData(count: number,page: number, pageSize: number) {
    this.coffeeService.getAllCoffees(count,page, pageSize).subscribe(
      (response) => {
        this.randomData = response;
        console.log(this.randomData);
        this.calculateTotalPages();

      },
      (error) => {
        console.error(error);
    });
  }
  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.randomData.length / this.itemsPerPage);
  }

 /*  loadCoffees() {
    this.store.dispatch(CoffeeActions.loadCoffees());
  } */
}
