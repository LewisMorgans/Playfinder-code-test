import { SearchActionTypes } from './actions';
import { ActionReducer } from '@ngrx/store';
import { PitchData, State, ActionWithPayload } from '../shared';

export const initialState: State = {
    data: []
};

export const store: ActionReducer<any> = (state = initialState, action: ActionWithPayload<PitchData>) => {
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



