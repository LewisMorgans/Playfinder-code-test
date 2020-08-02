import { SearchActionTypes } from './actions';
import { ActionReducer } from '@ngrx/store';
import { DataType, State, ActionWithPayload } from '../shared';

export const initialState: State = {
    data: []
};

export const store: ActionReducer<any> = (state = initialState, action: ActionWithPayload<DataType>) => {
    switch (action.type) {
        case SearchActionTypes.SEARCH_DATA: {
            return state
        }
        case SearchActionTypes.SAVE_DATA: {
            return {
                ...state,
                data: action.payload
            }
        }
        default: {
            return state;
        }
    }
}



