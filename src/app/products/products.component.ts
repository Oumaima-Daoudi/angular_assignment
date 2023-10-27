
import { Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

import { Observable } from 'rxjs';
import { Coffee } from 'src/store/coffee.model';

import { CoffeeService } from 'src/store/service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  coffeeData: Coffee | null = null;
  randomData: Coffee[] = [];
  displayedItems: Coffee[] = [];
  currentPage = 0;
  itemsPerPage = 10;
  totalPages: number = 0;
  isLoading: boolean = false;

  constructor(private coffeeService: CoffeeService, private router: Router) {}
  ngOnInit(): void {
    this.fetchRandomData(50, this.currentPage, this.itemsPerPage);
  }
  fetchRandomData(count: number, page: number, pageSize: number) {
    this.isLoading = true;
    this.coffeeService.getAllCoffees(count, page, pageSize).subscribe(
      (response) => {
        this.randomData = response;
        this.isLoading = false;
        console.log(this.randomData);
        this.calculateTotalPages();
        this.displayedItems = this.getItemsForCurrentPage();
      },
      (error) => {
        console.error(error);
        this.isLoading = false;
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

  onShowItemDescription(item : Coffee){
    const data = {
      id: item.id,
      blend_name: item.blend_name,
      intensifier: item.intensifier,
      notes: item.notes,
      origin: item.origin,
      variety: item.variety
    }
    console.log('Data to be sent:', data);
    this.router.navigate(['/product-detail'], {
      state: { coffeeData: data },
    });
  }

}
