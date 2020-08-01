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

export const getDataByID = (param) => createSelector(
    getState,
    data => {
        let result;
        Object.entries(data).map(([key, value]) => {
             value.map(data => {
                if (data.id == param) {
                    result = data
                }
            });
        })
        return result;
    }
);