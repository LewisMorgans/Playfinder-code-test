import { Action } from '@ngrx/store'
import { DataType } from '../shared';

export enum SearchActionTypes {
    SEARCH_DATA = '[SEARCH_DATA]',
    SAVE_DATA = '[SAVE_DATA]'
};

export class SearchData implements Action {
    readonly type = SearchActionTypes.SEARCH_DATA;
    constructor(public payload: DataType) { };
}

export class SaveData implements Action {
    readonly type = SearchActionTypes.SAVE_DATA;
    constructor(public payload: DataType) { }; 
}

export type SearchActions = SearchData | SaveData