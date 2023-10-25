/* import { Injectable } from "@angular/core";
import { createEffect } from "@ngrx/effects";
import { ofType } from "@ngrx/effects";
import * as CoffeeActions from "./actions";
import { CoffeeService } from "./service";
import { Actions } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";


@Injectable({
  providedIn: 'root'
})
export class CoffeeEffects {

  loadCoffees$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CoffeeActions.loadCoffees),
      mergeMap(() =>
        this.coffeeService.getAllCoffees().pipe(
          map((coffees) => CoffeeActions.loadCoffeesSuccess({ coffees })),
          catchError((error) =>
            of(CoffeeActions.loadCoffeesFailure({ error: error.message }))
          )
        )
      )
    )
  );
  constructor(private actions$: Actions, private coffeeService: CoffeeService) {}
}
 */
