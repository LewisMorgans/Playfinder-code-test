import * as selectors from './selector';

describe('Selector tests', () => {
    it('should return all data in the store', () => {
        const state = {
            data: [
                { id: '12345', startDate: '2018-01-01', endDate: '2019-01-01' },
                { id: '67891', startDate: '2018-01-01', endDate: '2019-01-01' },
                { id: '14567', startDate: '2018-01-01', endDate: '2019-01-01' }
            ]
        };
        expect(selectors.showAllData.projector(state)).toEqual(jasmine.objectContaining(state.data));
    });

    it('should return the data based on ID passed in', () => {
        const props = {
            id: '67891'
        }
        const state = {
            data: [
                { id: '12345', startDate: '2018-01-01', endDate: '2019-01-01' },
                { id: '67891', startDate: '2018-01-01', endDate: '2019-01-01' },
                { id: '14567', startDate: '2018-01-01', endDate: '2019-01-01' }
            ]
        };
        const result = state.data[1]

        expect(selectors.getDataByID.projector(state, props)).toEqual(jasmine.objectContaining(result));
    });
});
