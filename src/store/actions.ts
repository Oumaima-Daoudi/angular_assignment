import { createAction, props } from "@ngrx/store";
import { Coffee } from "./coffee.model";

export const loadCoffees = createAction('[Coffee] Load Coffees');
export const loadCoffeesSuccess = createAction('[Coffee] Load Coffees Success', props<{ coffees: Coffee[] }>());
export const loadCoffeesFailure = createAction('[Coffee] Load Coffees Failure', props<{ error: string }>());
export const addCoffee = createAction('[Coffee] Add Coffee', props<{ coffee: Coffee }>());
export const updateCoffee = createAction('[Coffee] Update Coffee', props<{ coffee: Coffee }>());
export const deleteCoffee = createAction('[Coffee] Delete Coffee', props<{ id: number }>());
