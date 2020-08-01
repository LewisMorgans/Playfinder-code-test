import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../reducers/reducer'

export const getState = createFeatureSelector<State>('store');

export const showAllData = createSelector(
    getState,
    data => {
        console.log(data)
        if (data[0] === null) {
            console.warn('no data')
        } else {
            return data.data
        }
    }
);