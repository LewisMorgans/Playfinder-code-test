import * as reducers from './reducer';
import { ActionWithPayload, State } from '../shared';

describe('Search Data Reducer', () => {
    it('Should return the state for an unknown action', () => {
        const action = {
            type: ''
        } as ActionWithPayload<any>;

        const initialState: State = {
            data: []
        };
        const store = reducers.store(initialState, action);
        expect(store).toBe(initialState);
    });

    it('Should return the state for Search Data', () => {
        const action = {
            type: '[SEARCH_DATA]'
        } as ActionWithPayload<any>;

        const initialState: State = {
            data: []
        };
        const store = reducers.store(initialState, action);
        expect(store).toBe(initialState);
    });

    it('Should return the new state for Save Data', () => {
        const initialState: State = {
            data: []
        };

        const action = {
            type: '[SAVE_DATA]',
            payload: [{ id: 12345 }]
        } as ActionWithPayload<any>;

        const newState = {
            data: [
                { id: 12345 }
            ]
        };
        const store = reducers.store(initialState, action);
        expect(store).toEqual(newState);
    })
});