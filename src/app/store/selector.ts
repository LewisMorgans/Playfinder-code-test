import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../shared';

export const getState = createFeatureSelector<State>('store');

export const showAllData = createSelector(
    getState,
    state => state.data
);

export const getDataByID = createSelector(
    getState,
    (state, props) => {
        const data = Object.values(state.data);
        return data.find((element: any) => props.id === element.id)
    }
);
