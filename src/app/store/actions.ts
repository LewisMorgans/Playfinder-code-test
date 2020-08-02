import { Action } from '@ngrx/store'
import { PitchData } from '../shared';

export enum SearchActionTypes {
    SEARCH_DATA = '[SEARCH_DATA]',
    SAVE_DATA = '[SAVE_DATA]'
};

export class SearchData implements Action {
    readonly type = SearchActionTypes.SEARCH_DATA;
    constructor(public payload: PitchData) { };
}

export class SaveData implements Action {
    readonly type = SearchActionTypes.SAVE_DATA;
    constructor(public payload: PitchData) { }; 
}

export type SearchActions = SearchData | SaveData