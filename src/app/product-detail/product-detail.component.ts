import { Component , OnInit} from '@angular/core';
import { Router} from "@angular/router";
import { Coffee } from 'src/store/coffee.model';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  coffeeData: Coffee | null= null;

   constructor(private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation && navigation.extras.state) {
      this.coffeeData = navigation.extras.state['coffeeData'];
    }
   }
   ngOnInit(): void {

   }

}
