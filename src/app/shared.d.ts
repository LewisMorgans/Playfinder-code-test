import { Action } from "@ngrx/store";

export class DataType {
    pitchID: number;
    startDate: string;
    endDate: string;
}

export interface ActionWithPayload<T> extends Action {
    payload: T;
}

export interface State {
    data: []
}