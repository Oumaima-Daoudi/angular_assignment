import { Component, OnInit } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { PageEvent } from '@angular/material/paginator';

import { Observable } from 'rxjs';
import { Coffee } from 'src/store/coffee.model';

import { Store } from '@ngrx/store';
import { CoffeeService } from 'src/store/service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  randomData: Coffee[] = [];
  displayedItems: Coffee[] = [];
  currentPage = 0;
  itemsPerPage = 10;
  totalPages: number = 0;
  isLoading: boolean = true;

  constructor(private coffeeService: CoffeeService) {}
  ngOnInit(): void {
    this.fetchRandomData(50, this.currentPage, this.itemsPerPage);
    console.log(this.randomData);
  }
  fetchRandomData(count: number, page: number, pageSize: number) {
    this.coffeeService.getAllCoffees(count, page, pageSize).subscribe(
      (response) => {
        this.randomData = response;
        this.isLoading = false;
        console.log(this.randomData);
        this.calculateTotalPages();
      },
      (error) => {
        console.error(error);
      }
    );
  }
  onPageChange(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.displayedItems = this.getItemsForCurrentPage();
  }

  calculateTotalPages() {
    this.totalPages = Math.ceil(this.randomData.length / this.itemsPerPage);
  }

  getItemsForCurrentPage() {
    const startIndex = this.currentPage * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.randomData.slice(startIndex, endIndex);
  }
}
