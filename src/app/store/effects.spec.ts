import { Observable, of } from "rxjs";
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { TestBed, fakeAsync, tick } from "@angular/core/testing";
import { DataEffects } from './effects';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Action } from '@ngrx/store';

describe('AppEffects', () => {
    let effects: DataEffects;
    let actions$: Observable<Action>;
    let store: MockStore;
    let httpMock: HttpTestingController;
    const initialState = [];

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [HttpClientTestingModule],
            providers: [
                DataEffects,
                provideMockActions(() => actions$),
                provideMockStore({ initialState }),
            ],
        }).compileComponents();
        effects = TestBed.get(DataEffects);
        httpMock = TestBed.inject(HttpTestingController);
        store = TestBed.inject(MockStore);
    });

    fit('Should search the API with parameters and return array of values', (done) => {

        const data = [
            { pitchID: '12345', startDate: '2018-01-01', endDate: '2019-01-01' },
            { pitchID: '67891', startDate: '2018-01-01', endDate: '2019-01-01' },
            { pitchID: '14567', startDate: '2018-01-01', endDate: '2019-01-01' }
        ];

        const params = {
            pitchID: 32990,
            startDate: '2020-10-2',
            endDate: '2020-10-3'
        };

        actions$ = of({ type: '[SEARCH_DATA]', payload: params });

        effects.searchAPIData$
            .subscribe(action => {
                console.log('action: ', action);
                done();
            });

        httpMock.expectOne({
            url: `https://api-v2.pfstaging.xyz/pitches/${params.pitchID}/slots?filter%5Bstarts%5D=${params.startDate}&filter%5Bends%5D=${params.endDate}`,
            method: 'GET'
        })
            .flush(data);
        console.log('data flushed')
    });

    afterEach(() => {
        httpMock.verify();
    });
});