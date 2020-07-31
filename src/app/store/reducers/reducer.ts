import { SearchActionTypes } from '../actions/actions';
import { ActionReducer, Action } from '@ngrx/store';

export let initialState = {

};

export const store: ActionReducer<any> = (state = initialState, action: Action) => {
    switch (action.type) {
        case SearchActionTypes.SEARCH_DATA: {
            return state
        }
        case SearchActionTypes.SAVE_DATA: {
            console.log('action: ', action)
            return {
                ...state, // setting state to nothing? wrong or right? am I mutating?
                action
            }
        }
        default: {
            return state;
        }
    }
}



