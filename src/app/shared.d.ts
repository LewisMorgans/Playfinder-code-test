import { Action } from "@ngrx/store";

export class PitchData {
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

export interface DataObj  { 
    id: string,
    type: string,
    attributes: object
  }