import { Component, OnInit } from '@angular/core';
import { PostService } from './services/post.service';
import { bootstrapApplication } from '@angular/platform-browser';
import { CoffeeService } from 'src/store/service';
import { provideStore } from "@ngrx/store";
import {provideEffects  } from "@ngrx/effects";
import { AppState, appEffects, appStore } from 'src/store/store';
import { Observable } from 'rxjs';
import { Coffee } from 'src/store/coffee.model';
 import * as CoffeeActions from "../store/actions";
 import { Store } from '@ngrx/store';
 import { selectAllCoffees } from 'src/store/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  coffees$: Observable<Coffee[]>;
  isLoading$: Observable<boolean>;

  constructor(private store: Store<AppState>) {
    this.coffees$ = this.store.select(selectAllCoffees);
    this.isLoading$ = this.store.select(state => state.coffee.loading);
    this.loadCoffees();
  }

  loadCoffees() {
  this.store.dispatch(CoffeeActions.loadCoffees());
  }

  /* addCoffee(index: number) {

  const coffee: Coffee = {id: index, description: 'New Todo', completed: false };
  this.store.dispatch(CoffeeActions.addCoffee({ coffee }));
  } */

 /*  complete(coffee: Coffee) {
    this.store.dispatch(CoffeeActions.updateCoffee({coffee : {...coffee, completed: true}}));
  } */
}


bootstrapApplication(AppComponent, {
  providers: [
    provideStore(appStore),
    provideEffects(appEffects),
    CoffeeService
  ]
});
