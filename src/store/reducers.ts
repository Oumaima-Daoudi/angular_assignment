
import { Coffee } from "./coffee.model";
import {on, createReducer} from "@ngrx/store"
import * as CoffeeActions from "./actions";

export interface CoffeeState {
coffees: Coffee[];
loading: boolean;
error: string;
}
export const initialState: CoffeeState = {
coffees: [],
loading: false,
error: ''
};
export const coffeeReducer = createReducer(
initialState,

on(CoffeeActions.loadCoffees, state => ({ ...state, loading: true })),

on(CoffeeActions.loadCoffeesSuccess, (state, { coffees }) =>({ ...state, coffees, loading: false })),

on(CoffeeActions.loadCoffeesFailure, (state, { error }) => ({ ...state, error, loading: false })),

on(CoffeeActions.addCoffee, (state, { coffee }) => ({ ...state, coffees: [...state.coffees, coffee] })),

on(CoffeeActions.updateCoffee, (state, { coffee }) => ({ ...state, coffees: state.coffees.map(t => t.id === coffee.id ? coffee : t) })),

on(CoffeeActions.deleteCoffee, (state, { id }) => ({ ...state, coffees: state.coffees.filter(t => t.id !== id) })),
);
