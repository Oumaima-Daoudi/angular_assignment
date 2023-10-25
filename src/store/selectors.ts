/* import { createFeatureSelector, createSelector } from '@ngrx/store';
import { CoffeeState } from './reducers'; // Import your CoffeeState type and reducer

// Create a feature selector to select the CoffeeState from the store
export const selectCoffeeState = createFeatureSelector<CoffeeState>('coffee');

// Create a selector to get all coffee items
export const selectAllCoffees = createSelector(
  selectCoffeeState,
  (state) => state.coffees
);

// Create a selector to get the loading state
export const selectLoading = createSelector(
  selectCoffeeState,
  (state) => state.loading
);

// Create a selector to get the error state
export const selectError = createSelector(
  selectCoffeeState,
  (state) => state.error
);
 */
