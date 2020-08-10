import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultsComponent } from './results.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';
import { MemoizedSelector } from '@ngrx/store';
import { getDataByID } from 'src/app/store';
import { PitchData, State } from 'src/app/shared';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let mockEvent: any;
  let store: MockStore;
  const initialState = [];
  let mockSelector

  beforeEach(async(() => {

    TestBed.configureTestingModule({
      declarations: [ResultsComponent],
      providers: [
        provideMockStore({ initialState }),
      ]
    })
      .compileComponents();
    fixture = TestBed.createComponent(ResultsComponent);
    component = fixture.componentInstance;
    mockEvent = {
      target: {
        innerHTML: '32990'
      }
    }
    store = TestBed.inject(MockStore);
    mockSelector = store.overrideSelector(
      getDataByID as any,
      { data: [{ name: 'lewis' }] } as any
    );
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set the id to the event value', () => {
    expect(component.id).toEqual(undefined);
    component.getValue(mockEvent);
    expect(component.id).toEqual('32990');
  });

  it('Should set the data$ observable to the NGRX selector value', (done) => {
    expect(component.data$).toEqual(undefined);
    component.getValue(mockEvent);
    expect(component.data$).toBeInstanceOf(Observable);
    component.data$
      .subscribe(r => {
        expect(r).toEqual(jasmine.objectContaining({ data: [{ name: 'lewis' }] }));
        done()
      })

  })
})
