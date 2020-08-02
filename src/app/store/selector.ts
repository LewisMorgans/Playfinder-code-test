import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from './reducer'

export const getState = createFeatureSelector<State>('store');

export const showAllData = createSelector(
    getState,
    data => {
        if (data[0] === null) {
            console.warn('no data')
        } else {
            return data.data
        }
    }
);

export const getDataByID = (id) => createSelector(
    getState,
    data => {
        let result;
        Object.entries(data).map(([key, value]) => {
             value.map(data => {
                 console.log('param: ', id);
                 console.log('data.ids: ', data.id);
                if (data.id === id) {
                    result = data
                }
            });
        })
        return result;
    }
);