import { SearchActionTypes, DataType } from './actions';
import { ActionReducer, Action } from '@ngrx/store';

export interface ActionWithPayload<T> extends Action {
    payload: T;
}

export interface State {
    data: []
}

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



