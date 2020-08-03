import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ResultsComponent } from './results.component';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { Observable } from 'rxjs';

describe('ResultsComponent', () => {
  let component: ResultsComponent;
  let fixture: ComponentFixture<ResultsComponent>;
  let event: object;
  let store: MockStore;
  const initialState = [];

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

    store = TestBed.inject(MockStore);
    event = {
      target: {
        innerHTML: 'teststring '
      }
    }
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Should set the id to the event value', () => {
    expect(component.id).toEqual(undefined);
    component.getValue(event);
    expect(component.id).toEqual('teststring')
  });

  it('Should set the data$ observable to the NGRX selector value', () => {
    expect(component.data$).toEqual(undefined);
    component.getValue(event);
    expect(component.data$).toBeInstanceOf(Observable);
  })
});
